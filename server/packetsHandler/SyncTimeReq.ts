import net from "net"
import logger from "../../util/logger"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import getTs from '../../util/getTs'
import { SyncTimeReq, SyncTimeRsp, SyncTimeRsp_CmdId, SyncTimeRsp_Retcode } from "../../BengHuai"

export default (socket: net.Socket, packet: SyncTimeReq) => {
    Packet.getInstance().serializeAndSend(socket, SyncTimeRsp_CmdId.CMD_ID, {
        retcode: SyncTimeRsp_Retcode['SUCC'],
        seq: packet.seq,
        curTime: parseInt(getTs())
    } as SyncTimeRsp)
}