import protobuf from 'protobufjs'
import { CmdId } from '../util/CmdId'

export default class Packet {
    private readonly proto: protobuf.Root
    private static instance: Packet

    private constructor() {
        this.proto = new protobuf.Root().loadSync('./BengHuai.proto', { keepCase:true }).root
    }

    public static getInstance(): Packet {
        if(!Packet.instance) Packet.instance = new Packet()
        return Packet.instance
    }

    public deserialize(buf: Buffer) {
        let Message: protobuf.Type;
        try {
            Message = this.proto?.lookupType(`bh3.${CmdId[buf.readUInt32BE(24)]}`)
        } catch (error) {
            return {
                head: buf.subarray(0, 4),
                packetVersion: buf.readUint16BE(4),
                clientVersion: buf.readUint16BE(6),
                time: buf.readUInt32BE(8),
                userId: buf.readUInt32BE(12),
                userIp: buf.readUInt32BE(16),
                userSessionId: buf.readUInt32BE(20),
                cmdId: buf.readUInt32BE(24),
                unk: buf.readUint16BE(28),
                bodyLen: buf.readUInt32BE(30),
                tail: buf.slice(-4),
            }
        }
        let body;
        try {
            body = Message?.decode(buf.subarray(34, buf.length - 4)).toJSON()
        } catch (error) {
            body = {}
        }
        return {
            head: buf.subarray(0, 4),
            packetVersion: buf.readUint16BE(4),
            clientVersion: buf.readUint16BE(6),
            time: buf.readUInt32BE(8),
            userId: buf.readUInt32BE(12),
            userIp: buf.readUInt32BE(16),
            userSessionId: buf.readUInt32BE(20),
            cmdId: buf.readUInt32BE(24),
            unk: buf.readUint16BE(28),
            bodyLen: buf.readUInt32BE(30),
            body,
            tail: buf.slice(-4),
        }
    }

    public serialize(cmdId: CmdId, data: object): Buffer {
        const Message = this.proto?.lookupType(`bh3.${CmdId[cmdId]}`)
        const encodedProtobuf = Message.encode(Message.fromObject(data)).finish()
        const buf = Buffer.alloc(34+encodedProtobuf.length+4)
        buf.writeUInt32BE(0x1234567)
        buf.writeUInt16BE(1, 4)
        buf.writeUInt16BE(0, 6)
        buf.writeUInt32BE(0, 8)
        buf.writeUInt32BE(0, 12)
        buf.writeUInt32BE(0, 16)
        buf.writeUInt32BE(0, 20)
        buf.writeUInt32BE(cmdId, 24)
        buf.writeUInt16BE(0, 28)
        buf.writeUInt32BE(encodedProtobuf.length, 30)
        Buffer.from(encodedProtobuf).copy(buf, 34)
        buf.writeUInt32BE(0x89abcdef ,34+encodedProtobuf.length)
        return buf
    }
}