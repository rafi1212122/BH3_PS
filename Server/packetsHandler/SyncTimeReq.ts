import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import getTs from '../../util/getTs'
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: SyncTimeReq) => {
    const reply = Packet.getInstance().serialize(CmdId['SyncTimeRsp'], {
        retcode: Retcode['SUCC'],
        seq: packet.seq,
        cur_time: parseInt(getTs())
    } as SyncTimeRsp)
    socket.write(reply)
    
}

export interface SyncTimeReq {
    seq?: number
}

export interface SyncTimeRsp {
    retcode: Retcode
    cur_time?: number
    seq?: number
}