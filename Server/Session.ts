import net from "net";
import { CmdId } from "../util/CmdId";
import Packet from "./Packet";
import logger from '../util/logger'
import { User } from "@prisma/client";

export default class Session {
    private currentUser!: User;

    set user(user: User) {
        this.currentUser = user
    }

    get user() {
        return this.currentUser
    }

    public constructor(id: string, socket: net.Socket) {
        socket.on('data', async (data: Buffer) => {
            const packet = Packet.getInstance().deserialize(data)
            logger(`${socket.remoteAddress}:${socket.remotePort} ${CmdId[packet.cmdId]}`, 'warn', 'TCP')
            if(!packet.body) return logger(`CmdId ${packet.cmdId} NOT IMPLEMENTED!`, 'danger')
            await import(`./packetsHandler/${CmdId[packet.cmdId]}`).then(async r => {
                await r.default(socket, packet?.body, packet.cmdId);
            }).catch(err => {
                if (err.code === 'MODULE_NOT_FOUND') {
                   return logger(`CMD ${CmdId[packet.cmdId]} NOT REGISTERED!`, 'danger');
                }
                logger(err, 'danger');
            });
        })
        socket.on('close', (hasError) => {
            logger(`${socket.remoteAddress}:${socket.remotePort} Disconnected${hasError&&' Abruptly'}!`, 'warn', 'TCP')
        })
        socket.on('error', (err) => {
            logger(`${socket.remoteAddress}:${socket.remotePort} socket error ${err}!`, 'danger', 'TCP')
        })
    }
}