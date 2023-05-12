import { Button, Card, NumberInput, Tabs, Title } from '@mantine/core';
import React, { useState } from 'react';

export default function Level({ execute }: { execute: (cmd: string) => void }) {
    const [newLevel, setNewLevel] = useState(1)

    return <Tabs.Panel value='level'>
        <Card withBorder radius={'md'} p={'xl'} px={'1.75vw'} m={10}>
            <Card.Section py={5} withBorder>
                <Title order={3} color='white'>Set The Player Level</Title>
            </Card.Section>
            <Card.Section py={3}>
                <NumberInput value={newLevel} onChange={v => setNewLevel(typeof v === 'number' ? v : 1)} min={1} max={88} label={"New level"}/>
            </Card.Section>
            <Card.Section py={5} style={{ display: 'flex', justifyContent: 'end' }}>
                <Button onClick={()=>execute(`level ${newLevel}`)}>Execute</Button>
            </Card.Section>
        </Card>
    </Tabs.Panel>
}