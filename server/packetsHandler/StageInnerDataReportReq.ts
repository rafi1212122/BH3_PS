import net from "net"
import logger from "../../util/logger"
import { StageInnerDataReportReq, StageInnerDataReportRsp, StageInnerDataReportRsp_CmdId, StageInnerDataReportRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: StageInnerDataReportReq) => {
    Packet.getInstance().serializeAndSend(socket, StageInnerDataReportRsp_CmdId.CMD_ID, {
        retcode: StageInnerDataReportRsp_Retcode['SUCC'],
    } as StageInnerDataReportRsp)
}