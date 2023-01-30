import protobuf from 'protobufjs'
import { CmdId } from '../util/CmdId'
import logger from '../util/logger'
import net from 'net'
import GameServer from './GameServer'
import type * as types from "../BengHuai";

export default class Packet {
    private readonly proto: protobuf.Root
    private static instance: Packet

    private constructor() {
        this.proto = new protobuf.Root().loadSync('./BengHuai.proto').root
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

    // magic    pver cver time     userid   userip   sessid   cndid    unk  bodylen  body_start
    // 01234567 0001 0000 00000000 0c410def 00000000 c4c08dc2 00000006 0000 0000000b 10003a02454e4200c80100 89abcdef
    // 01234567 0001 0000 00000001 01578b33 08c3896e 00000000 00000007 0014 0000001e 08c1943110acab88e90320acab88c1022a020800080020012800320a6f7665727365617330314801500058f80178d9999e6889abcdef
    // from: https://discord.com/channels/1002339514259341382/1002339515022712955/1045649498363400232 (memetrollsXD#0001)
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

    public serializeAndSend(socket: net.Socket, cmdId: number, data: any) {
        const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
        const octets = socket.remoteAddress?socket.remoteAddress.split('.').map(octet => parseInt(octet, 10)):[0,0,0,0]
        const bytes = new Uint8Array(octets);
        const int32 = new Uint32Array(bytes.buffer);
        const intRemoteIp = int32[0]

        const Message = this.proto?.lookupType(`bh3.${CmdId[cmdId]}`)
        const encodedProtobuf = Message.encode(Message.fromObject(data)).finish()
        const buf = Buffer.alloc(34+encodedProtobuf.length+4+(cmdId>7?14:cmdId===7?20:0))
        buf.writeUInt32BE(0x1234567)
        buf.writeUInt16BE(1, 4)
        buf.writeUInt16BE(0, 6)
        buf.writeUInt32BE(session?.packetSentCount||0, 8)
        buf.writeUInt32BE(session?.user.uid||0, 12)
        buf.writeUInt32BE(0, 16)
        buf.writeUInt32BE(0, 20)
        buf.writeUInt32BE(cmdId, 24)
        buf.writeUInt16BE(cmdId>7?14:cmdId===7?20:0, 28)
        buf.writeUInt32BE(encodedProtobuf.length, 30)
        cmdId>7?Buffer.from("0892a31d10acab88e1032a020800", 'hex').copy(buf, 34):cmdId===7&&Buffer.from("0892a31d10acab88e10320acab88c1022a020800", 'hex').copy(buf, 34)
        Buffer.from(encodedProtobuf).copy(buf, cmdId>7?34+14:cmdId===7?34+20:34)
        buf.writeUInt32BE(0x89abcdef, 34+encodedProtobuf.length+(cmdId>7?14:cmdId===7?20:0))
        
        if(session?.packetSentCount!==undefined) {
            session.packetSentCount = session.packetSentCount+1
        }

        if(buf.length>1412){
            // this is so cringe
            for (let index = 0; index < Math.ceil(buf.length/1412); index++) {
                let currentBuffer = buf.slice(index*1412, index==Math.ceil(buf.length/1412)-1?buf.length:(index+1)*1412)
                socket.write(currentBuffer, (err) => {
                    if(err) return console.log('socket.write error', err)
                    logger(`${CmdId[cmdId]} Part ${index} sent! - ${currentBuffer.length}`, 'warn', 'TCP')
                })
            }
            return
        }
        
        socket.write(buf, (err) => {
            if(err) return console.log('socket.write error', err)
            logger(`${CmdId[cmdId]} sent!`, 'warn', 'TCP')
        })

    }
}