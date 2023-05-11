import React, { useEffect, useState } from 'react';
import type { ProxyPacket } from '../../backend/Client';
import { ActionIcon, AppShell, Badge, Button, Code, FileButton, Grid, Group, Header, Input, Navbar, Select, Table, Text } from '@mantine/core';
import { CmdId } from '../../../../resources/proto/CmdId';
import { useHotkeys, useInputState } from '@mantine/hooks'

export default function App() {
    const [file, setFile] = useState<File | null>(null);
    const [messages, setMessages] = useState<ProxyPacket[]>([]);
    const [uidFilter, setUidFilter] = useState<number>(0)
    const [selectedPacket, setSelectedPacket] = useState<ProxyPacket>()
    const [searchQuery, setSearchQuery] = useInputState("")
  
    useEffect(() => {
      const socket = new WebSocket(`ws://localhost:6060`);
  
      socket.addEventListener('message', event => {
        setMessages(messages => [...messages, JSON.parse(event.data)]);
      });
  
      return () => {
        socket.close();
      };
    }, []);

    useHotkeys([
        ['Escape', () => setSelectedPacket(undefined)],
    ])

    const saveToJson = () => {
        const blob = new Blob([JSON.stringify(messages, null, '\t')],{type:'application/json'});
        const link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = window.URL.createObjectURL(blob);
            link.setAttribute('download', `${new Date().getTime()}-capture`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(window.URL.createObjectURL(blob));
        }
    }
    
    useEffect(()=> {
        readFile()
    }, [file])

    const readFile = async () => {
        setMessages([])
        if(!file) return 
        setMessages(JSON.parse(await file.text()))
    }

    return (
        <AppShell
        navbar={selectedPacket&&<Navbar p={'sm'} height={'calc(100vh - 75px)'} width={{ base: 300 }}>
            <label>JSON Data</label>
            <Code block>{JSON.stringify(selectedPacket.data, null, 2)}</Code>
        </Navbar>}
        header={<Header height={'auto'} display={'flex'} style={{ alignItems: 'center', justifyContent: 'space-between' }} p={'md'}>
            <Select withinPortal value={uidFilter?uidFilter.toString() : null} onChange={n=>setUidFilter(parseInt(n||"0"))} placeholder='Select UID' clearable data={[...new Set(messages.map(item => item.userId))].map(i=>({ value: i.toString(), label: i?i.toString():"Clear" }))}></Select>
            <Input value={searchQuery} onChange={setSearchQuery} miw={'30%'} placeholder='Search...' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>} />
            <Group>
                <Text size={'lg'} color='white' weight={'bold'}>{`Packets: ${messages.length}`}</Text>
                <ActionIcon color='green' title='Save to JSON' onClick={saveToJson}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={20}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg></ActionIcon>
                <FileButton onChange={setFile} accept="application/json">
                    {(props) => <Button {...props}>Open JSON</Button>}
                </FileButton>
            </Group>
        </Header>}
        >

            <Table style={{ width: selectedPacket?'calc(100vw - 350px)':undefined }} fontSize={'md'} highlightOnHover mt={75} verticalSpacing={5}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CMD ID</th>
                        <th>Packet Name</th>
                        <th>Source</th>
                        <th>Body Length</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchQuery?(uidFilter?messages.filter(p=>p.userId===uidFilter):messages).filter(p=>JSON.stringify(p.data).toLowerCase().includes(searchQuery.toLowerCase())||(CmdId[p.cmdId]||"").toLowerCase().includes(searchQuery.toLowerCase())||p.cmdId==parseInt(searchQuery)):(uidFilter?messages.filter(p=>p.userId===uidFilter):messages)).map((packet, index) => <tr style={{ cursor: 'pointer' }} onClick={()=>setSelectedPacket(packet)} key={index}>
                        <td>{index+1}</td>
                        <td>{packet.cmdId}</td>
                        <td>{CmdId[packet.cmdId]||"-"}</td>
                        <td>{packet.type?<Badge>SERVER</Badge>:<Badge color='orange'>CLIENT</Badge>}</td>
                        <td>{packet.bodyLen}</td>
                        <td style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: selectedPacket ? '30vw' : '50vw' }}>{JSON.stringify(packet.data)}</td>
                    </tr>)}
                </tbody>
            </Table>
        </AppShell>
    );
  }