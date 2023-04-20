import net from "net"
import { StageInnerDataReportReq, StageInnerDataReportRsp, StageInnerDataReportRsp_CmdId, StageInnerDataReportRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: StageInnerDataReportReq) => {
    Packet.getInstance().serializeAndSend(socket, StageInnerDataReportRsp_CmdId.CMD_ID, {
        retcode: StageInnerDataReportRsp_Retcode['SUCC'],
    } as StageInnerDataReportRsp)
}