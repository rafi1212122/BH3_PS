import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import getTs from '../../util/getTs'
import { SyncTimeReq, SyncTimeRsp, SyncTimeRsp_Retcode } from "../../BengHuai"

export default (socket: net.Socket, packet: SyncTimeReq) => {
    const reply = Packet.getInstance().serialize(CmdId['SyncTimeRsp'], {
        retcode: SyncTimeRsp_Retcode['SUCC'],
        seq: packet.seq,
        curTime: parseInt(getTs())
    } as SyncTimeRsp)
    socket.write(reply)   
}