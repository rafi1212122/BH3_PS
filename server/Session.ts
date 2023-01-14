import net from "net";
import { CmdId } from "../util/CmdId";
import Packet from "./Packet";
import logger from '../util/logger'
import { User } from "../mongodb/Model/User";
import { Avatar } from "../mongodb/Model/Avatar";

export default class Session {
    private currentUser!: User
    private currentAvatars!: Avatar[]

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
        socket.on('data', async (data: Buffer) => {
            const packet = Packet.getInstance().deserialize(data)
            logger(`${socket.remoteAddress}:${socket.remotePort} ${CmdId[packet.cmdId]}`, 'warn', 'TCP')
            if(!packet.body) {
                socket.write(Buffer.from(`0123456700010000000001d9011d21e60000000000000000${Buffer.alloc(4).writeInt32BE(packet.cmdId+1).toString()}000e0000000208c1943110acab88e9032a020800080089abcdef`))
                return logger(`CmdId ${packet.cmdId} NOT IMPLEMENTED!`, 'danger')
            }
            await import(`./packetsHandler/${CmdId[packet.cmdId]}`).then(async r => {
                await r.default(socket, packet?.body, packet.cmdId);
            }).catch(err => {
                if (err.code === 'MODULE_NOT_FOUND') {
                    socket.write(Buffer.from(`0123456700010000000001d9011d21e60000000000000000${Buffer.alloc(4).writeInt32BE(packet.cmdId+1).toString()}000e0000000208c1943110acab88e9032a020800080089abcdef`))
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