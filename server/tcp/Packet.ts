import { Reader, Writer } from 'protobufjs'
import * as bh3 from '../../resources/proto/BengHuai'
import { CmdId, PacketName } from '../../resources/proto/CmdId'
import Logger from '../../utils/Logger'

export default class Packet {
    public readonly c = new Logger("Packet", 'magentaBright')
    public readonly raw: Buffer
    public readonly headMagic: Buffer
    public readonly userId: number
    public readonly cmdId: number
    public readonly bodyLen: number
    public readonly body: Buffer
    public readonly tailMagic: Buffer
    public readonly data: {}

    public constructor(buf: Buffer) {
        this.raw = buf
        this.cmdId = buf.readUInt32BE(24)
        const packetName = CmdId[this.cmdId] as PacketName

        if(!packetName) {
            this.c.err(`CMD ID ${this.cmdId} NOT RECOGNIZED!`);
        }

        this.headMagic = buf.subarray(0, 4)
        this.userId = buf.readUInt32BE(12)
        this.bodyLen = buf.readUInt32BE(30)
        this.body = buf.subarray(34, 34+this.bodyLen)
        this.tailMagic = buf.slice(-4)
        try {
            this.data = bh3[packetName].decode(this.body)
        } catch (error) {
            this.data = {}
            this.c.warn(`Failed to deserialize ${packetName||`CMD ID ${this.cmdId}`}`);
            this.c.warn(`Body: ${this.body.toString('hex')}`);
        }
    }

    public static isValid(data: Buffer): boolean {
        const str = data.toString('hex')
        return str.startsWith("01234567") && str.endsWith("89abcdef")
    }

    public static encode<T extends MessageType<any>>(type: T, data: UnWrapMessageType<T>, cmdId: number) {
        const encodedMessage = Buffer.from(type.encode(type.fromPartial(data)).finish())

        const buf = Buffer.allocUnsafe(38+encodedMessage.length)
        buf.writeUInt32BE(0x1234567)
        buf.writeUInt16BE(1, 4)
        buf.writeUInt16BE(0, 6)
        buf.writeUInt32BE(0, 8)
        buf.writeUInt32BE(0, 12)
        buf.writeUInt32BE(0, 16)
        buf.writeUInt32BE(0, 20)
        buf.writeUInt32BE(cmdId, 24)
        buf.writeUInt16BE(0, 28)
        buf.writeUInt32BE(encodedMessage.length, 30)
        Buffer.from(encodedMessage).copy(buf, 34)
        buf.writeUInt32BE(0x89abcdef, 34+encodedMessage.length)

        return new Packet(buf)
    }
}

export class MessageType<T> {
    "encode": (arg0: T) => Writer;
    "fromPartial": (arg0: object) => T;
    "decode": (input: Reader | Uint8Array, length?: number)=> T;
}

export type UnWrapMessageType<T> = T extends MessageType<infer U> ? U : T;