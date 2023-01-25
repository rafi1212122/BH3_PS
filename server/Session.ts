import net from "net";
import { CmdId } from "../util/CmdId";
import Packet from "./Packet";
import logger from '../util/logger'
import { User } from "../mongodb/Model/User";
import { Avatar } from "../mongodb/Model/Avatar";
import GameServer from "./GameServer";

export default class Session {
    private currentUser!: User
    private currentAvatars!: Avatar[]
    public chatroom: number = 0
    public packetSentCount: number = 0
    public readonly socket: net.Socket

    set user(user: User) {
        this.currentUser = user
    }

    set avatars(avatars: Avatar[]) {
        this.currentAvatars = avatars
    }

    get user() {
        return this.currentUser
    }

    get avatars() {
        return this.currentAvatars
    }

    public constructor(id: string, socket: net.Socket) {
        this.socket = socket
        socket.on('data', async (data: Buffer) => {
            const packet = Packet.getInstance().deserialize(data)
            logger(`${socket.remoteAddress}:${socket.remotePort} ${CmdId[packet.cmdId]}`, 'warn', 'TCP')
            if(!packet.body) {
                return logger(`CmdId ${packet.cmdId} NOT RECOGNIZED!`, 'danger')
            }
            await import(`./packetsHandler/${CmdId[packet.cmdId]}`).then(async r => {
                await r.default(socket, packet?.body);
            }).catch(err => {
                if (err.code === 'MODULE_NOT_FOUND') {
                    return logger(`CMD ${CmdId[packet.cmdId]} NOT HANDLED!`, 'danger');
                }
                logger(err, 'danger');
            });
        })
        socket.on('close', (hasError) => {
            logger(`${socket.remoteAddress}:${socket.remotePort} Disconnected${hasError&&' Abruptly'}!`, 'warn', 'TCP')
            GameServer.getInstance().sessions.delete(id)
        })
        socket.on('error', (err) => {
            logger(`${socket.remoteAddress}:${socket.remotePort} socket error ${err}!`, 'danger', 'TCP')
            GameServer.getInstance().sessions.delete(id)
        })
    }
}