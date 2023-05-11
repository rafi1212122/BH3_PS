import { Socket } from "net";
import Logger from "../../../utils/Logger";
import Packet from "../../../server/tcp/Packet";
import Config from "../../../utils/Config";
import { CmdId } from "../../../resources/proto/CmdId";
import Proxy from "./Proxy";
import WSServer from "./WSServer";

export default class Client {
    public readonly socket: Socket
    public readonly id: string
    public readonly c: Logger
    public readonly tcpClient = new Socket()
    public readonly packets: ProxyPacket[] = []

    constructor(socket: Socket) {
        this.socket = socket
        this.id = `${socket.remoteAddress}:${socket.remotePort}`
        this.c = new Logger(this.id, 'bgBlue')

        this.socket.on('close', (hasError) => {
            this.c.warn(`${this.socket.remoteAddress}:${this.socket.remotePort} Disconnected${hasError&&' Abruptly'}!`)
            this.onDisconnect()
        })
        
        this.socket.on('error', (err) => {
            this.c.err(`${this.socket.remoteAddress}:${this.socket.remotePort} socket error ${err}!`)
            this.onDisconnect()
        })

        this.tcpClient.connect(Config.PROXY.REMOTE_PORT, Config.PROXY.REMOTE_HOST, () => {
            const remote = `${this.tcpClient.remoteAddress}:${this.tcpClient.remotePort}`
            this.c.log(`Connected to remote ${remote}!`)
        })

        this.socket.on('data', data => this.onData(data, PacketType.CLIENT))
        this.tcpClient.on('data', data => this.onData(data, PacketType.SERVER))
    }

    private onData(data: Buffer, type: PacketType) {
        switch(type) {
            case PacketType.CLIENT:
                this.tcpClient.write(data);
                break;
            case PacketType.SERVER:
                this.socket.write(data);
                break;
        }

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
            break;
          }
          const packet = data.slice(magicIndex, endIndex + packetEnd.length);
          packets.push(packet);
        
          startIndex = endIndex + packetEnd.length;
        }

        for (const packet of packets) {
            if(Packet.isValid(packet)) {
                this.handlePacket(new Packet(packet), type)
            }else {
                this.c.err("Invalid packet received:", packet.toString('hex'))
            }
        }
    }

    private handlePacket(packet: Packet, type: PacketType) {
        const packetName = CmdId[packet.cmdId]
        this.c.log(packetName||`CMD ID ${packet.cmdId}`)

        this.packets.push({ ...packet, type })

        WSServer.getInstance().broadcast(JSON.stringify({ ...packet, type }))

        // Packets that doesn't need to be handled
        // const ignoredPackets = ["KeepAliveNotify"]
        // if(ignoredPackets.includes(packetName)) return

        // import(`./packets/${packetName}`).then(async r => {
        //     await r.default(this, packet);
        // }).catch(err => {
        //     if (err.code === 'MODULE_NOT_FOUND') {
        //         return this.c.warn(`${packetName||`CMD ID ${packet.cmdId}`} NOT HANDLED!`);
        //     }
        //     this.c.debug(err);
        // })
    }

    public onDisconnect(){
        this.socket.destroy()
        this.tcpClient.destroy()
        Proxy.getInstance().clients.delete(this.id)
    }
}

export enum PacketType {
    CLIENT,
    SERVER
}

export interface ProxyPacket extends Packet {
    type: PacketType
}