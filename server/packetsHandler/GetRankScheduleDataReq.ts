import net from "net"
import { GetRankScheduleDataReq, GetRankScheduleDataRsp, GetRankScheduleDataRsp_CmdId, GetRankScheduleDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRankScheduleDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRankScheduleDataRsp_CmdId.CMD_ID, {
        retcode: GetRankScheduleDataRsp_Retcode.SUCC
    } as GetRankScheduleDataRsp)
}