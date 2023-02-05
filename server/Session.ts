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

    public constructor(public id: string, public readonly socket: net.Socket) {
        this.socket.on('close', (hasError) => {
            logger(`${this.socket.remoteAddress}:${this.socket.remotePort} Disconnected${hasError&&' Abruptly'}!`, 'warn', 'TCP')
            this.removeSession()
        })
        this.socket.on('error', (err) => {
            logger(`${this.socket.remoteAddress}:${this.socket.remotePort} socket error ${err}!`, 'danger', 'TCP')
            this.removeSession()
        })
        this.socket.on('data', this.onData.bind(this))
    }

    private onData(data: Buffer){
        const packet = Packet.getInstance().deserialize(data)
        logger(`${this.socket.remoteAddress}:${this.socket.remotePort} ${CmdId[packet.cmdId]}`, 'warn', 'TCP')
        if(!packet.body) {
            logger(`CmdId ${packet.cmdId} NOT RECOGNIZED!`, 'danger')
            return
        }
        import(`./packetsHandler/${CmdId[packet.cmdId]}`).then(async r => {
            await r.default(this.socket, packet?.body);
            this.packetSentCount++
        }).catch(err => {
            if (err.code === 'MODULE_NOT_FOUND') {
                return logger(`CMD ${CmdId[packet.cmdId]} NOT HANDLED!`, 'danger');
            }
            logger(err, 'danger');
        })
    }

    private removeSession(){
        GameServer.getInstance().sessions.delete(this.id)
    }
}

