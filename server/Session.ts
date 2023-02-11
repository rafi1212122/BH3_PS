import net from "net";
import { CmdId } from "../util/CmdId";
import Packet from "./Packet";
import logger from '../util/logger'
import { User } from "../mongodb/Model/User";
import { Avatar } from "../mongodb/Model/Avatar";
import GameServer from "./GameServer";
import { createWriteStream } from "fs";

const c = new console.Console(createWriteStream('./log.txt'))

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
        const raw = {
            head: data.subarray(0, 4),
            packetVersion: data.subarray(4, 6),
            clientVersion: data.subarray(6, 8),
            time: data.subarray(8, 12),
            userId: data.subarray(12, 16),
            userIp: data.subarray(16, 20),
            userSessionId: data.subarray(20, 24),
            cmdId: data.subarray(24, 28),
            unk: data.subarray(28, 30),
            bodyLen: data.subarray(30, 34),
            body: data.subarray(34, 34+data.readUInt32BE(30)),
            tail: data.subarray(-4),
        }

        let processedPacket = ""
        for (const [key, value] of Object.entries(raw)) {
            processedPacket = processedPacket+value.toString('hex')
        }

        if(Buffer.from(processedPacket, 'hex').length!==data.length){
            this.onData(data.subarray(Buffer.from(processedPacket, 'hex').length))
        }

        logger(`${this.socket.remoteAddress}:${this.socket.remotePort} ${CmdId[packet.cmdId]}`, 'warn', 'TCP')
        c.log(`${CmdId[packet.cmdId]} | ${processedPacket}`)

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

