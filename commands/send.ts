import { Socket } from "net";
import Packet from "../server/Packet";
import { readdirSync } from 'fs'

export default async (socket: Socket, args: string[]) => {
    switch(args[1].toLowerCase()){
        case'all':
            readdirSync('./server/packetsHandler').forEach(async (packetName) => {
                if(!packetName.startsWith('Get')||packetName.startsWith('GetPlayerToken')||packetName.startsWith('ClientData'))return
                try {
                    (await import(`../server/packetsHandler/${packetName.slice(0, -3)}`)).default(socket, {})
                } catch (error) {
                    return
                }
            })
            break
    }
}