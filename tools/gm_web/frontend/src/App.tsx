import { Button, Card, Header, NumberInput, Select, Tabs, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Level from './panels/Level'
import axios from 'axios'

export default function App() {
    const [sessions, setSessions] = useState<{
        id: string
        uid: number
    }[]>([])
    const [selectedSession, setSelectedSession] = useState<string|null>(null)

    useEffect(() => {
        getSessions()
    }, [])

    const getSessions = async () => {
        const sessionsRsp = await axios.get('//127.0.0.1/gm/sessions')
        setSessions(sessionsRsp.data)
    }

    const execute = (cmd: string) => {
        if(!selectedSession) return alert("Please select a session first!")
        axios.get(`//127.0.0.1/gm/execute?cmd=${cmd}&session_id=${selectedSession}`).catch(err => {
            console.log(err)
        })
    }

    return <>
        <Header height={60}>
            <Select label="Session" p={'sm'} value={selectedSession} onChange={setSelectedSession} data={sessions.map(session => ({ value: session.id, label: `UID ${session.uid} (${session.id})` }))}/>
        </Header>
        <Tabs px={10} mt={60} defaultValue={'level'} orientation='vertical'>
            <Tabs.List>
                <Tabs.Tab style={{ fontWeight: 500, fontSize: '1.2rem' }} value='level'>Level</Tabs.Tab>
            </Tabs.List>

            <Level execute={execute}/>
        </Tabs>
    </>
}