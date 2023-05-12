import { Socket } from "net";
import Logger from "../../utils/Logger";
import Gameserver from "./Gameserver";
import Packet from "./Packet";
import { CmdId } from "../../resources/proto/CmdId";
import Player from "./game/Player";

export default class Session {
    public readonly id: string
    public readonly c: Logger
    private readonly socket: Socket
    public player!: Player;

    public constructor(socket: Socket) {
        this.socket = socket
        this.id = `${socket.remoteAddress}:${socket.remotePort}`
        this.c = new Logger(this.id, 'bgBlue')

        this.socket.on('close', (hasError) => {
            this.c.warn(`${this.socket.remoteAddress}:${this.socket.remotePort} Disconnected${hasError&&' Abruptly'}!`)
            this.removeSession()
        })
        this.socket.on('error', (err) => {
            this.c.err(`${this.socket.remoteAddress}:${this.socket.remotePort} socket error ${err}!`)
            this.removeSession()
        })
        this.socket.on('data', this.onData.bind(this))
    }

    private onData(data: Buffer) {
        const packetMagic = Buffer.from('01234567', 'hex');
        const packetEnd = Buffer.from('89abcdef', 'hex');
        const packets = [];
        let startIndex = 0;
        while (startIndex < data.length) {
          const magicIndex = data.indexOf(packetMagic, startIndex);
          if (magicIndex < 0) {
            // Magic number not found, no more packets to extract
            break;
          }
          const endIndex = data.indexOf(packetEnd, magicIndex + packetMagic.length);
          if (endIndex < 0) {
            // End of packet not found, packet is incomplete
            this.c.err('HUH undending packet is detected!!!')
            break;
          }
          const packet = data.slice(magicIndex, endIndex + packetEnd.length);
          packets.push(packet);
        
          startIndex = endIndex + packetEnd.length;
        }

        for (const packet of packets) {
            if(Packet.isValid(packet)) {
                this.handlePacket(new Packet(packet))
            }else {
                this.c.err("Invalid packet received:", packet.toString('hex'))
            }
        }
    }

    private handlePacket(packet: Packet) {
        const packetName = CmdId[packet.cmdId]
        this.c.log(packetName||`CMD ID ${packet.cmdId}`)

        // Packets that doesn't need to be handled
        const ignoredPackets = ["KeepAliveNotify"]
        if(ignoredPackets.includes(packetName)) return

        import(`./packets/${packetName}`).then(async r => {
            await r.default(this, packet);
        }).catch(err => {
            if (err.code === 'MODULE_NOT_FOUND') {
                return this.c.warn(`${packetName||`CMD ID ${packet.cmdId}`} NOT HANDLED!`);
            }
            this.c.debug(err);
        })
    }

    public send(...packets: Packet[]) {
        for (const packet of packets) {
            const packetName = CmdId[packet.cmdId]
            
            this.socket.write(packet.raw, (err) => {
                this.c[err?'err':'log'](packetName||`CMD ID ${packet.cmdId}`, err)
            })
        }
    }

    public removeSession(){
        this.socket.destroy()
        Gameserver.getInstance().sessions.delete(this.id)
    }
}