import net from "net"
import logger from "../../util/logger"
import { GetRankScheduleDataReq, GetRankScheduleDataRsp, GetRankScheduleDataRsp_CmdId, GetRankScheduleDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRankScheduleDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRankScheduleDataRsp_CmdId.CMD_ID, {
        retcode: GetRankScheduleDataRsp_Retcode.SUCC
    } as GetRankScheduleDataRsp)
}