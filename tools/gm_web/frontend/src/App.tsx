import { ActionIcon, Button, Card, Header, NumberInput, Select, Tabs, TextInput, Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { notifications } from '@mantine/notifications'
import Level from './panels/Level'
import axios from 'axios'

export default function App() {
    const [sessions, setSessions] = useState<{
        id: string
        uid: number
    }[]>([])
    const [selectedSession, setSelectedSession] = useState<string|null>(null)
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        getSessions()
    }, [])

    const getSessions = async () => {
        const sessionsRsp = await axios.get('//127.0.0.1/gm/sessions')
        setSelectedSession(null)
        setSessions(sessionsRsp.data)
    }

    const execute = (cmd: string) => {
        if(!selectedSession) return alert("Please select a session first!")
        axios.post(`//127.0.0.1/gm/execute`, {
            cmd,
            session_id: selectedSession
        }).then(response => {
            notifications.show({
                id: 'exec-err',
                title: "Success!",
                message: response.data.msg || "Commmand executed successfully"
            })
            
        }).catch(err => {
            notifications.show({
                id: 'exec-err',
                title: "Error!",
                message: err.response.data.msg || "Unknown server error",
                color: 'red'
            })
        })
    }

    return <>
        <Header style={{ justifyContent: 'space-around', gap: '1vw' }} display={'flex'} p={'sm'} height={'auto'}>
            <Select rightSection={<ActionIcon onClick={getSessions}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg></ActionIcon>} w={'100%'} label="Session" value={selectedSession} onChange={setSelectedSession} data={sessions.map(session => ({ value: session.id, label: `UID ${session.uid} (${session.id})` }))}/>
            <TextInput ref={ref} disabled={!selectedSession} rightSection={<ActionIcon onClick={() => ref.current?.value && execute(ref.current?.value)} color='green' variant='light'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg></ActionIcon>} w={'100%'} label={"Execute arbitrary command"}/>
        </Header>
        <Tabs px={10} mt={60} defaultValue={'level'} orientation='vertical'>
            <Tabs.List>
                <Tabs.Tab style={{ fontWeight: 500, fontSize: '1.2rem' }} value='level'>Level</Tabs.Tab>
            </Tabs.List>

            <Level execute={execute}/>
        </Tabs>
    </>
}