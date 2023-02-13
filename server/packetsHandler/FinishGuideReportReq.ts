import net from "net"
import { FinishGuideReportReq, FinishGuideReportRsp, FinishGuideReportRsp_CmdId, FinishGuideReportRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: FinishGuideReportReq) => {
    Packet.getInstance().serializeAndSend(socket, FinishGuideReportRsp_CmdId.CMD_ID, {
        retcode: FinishGuideReportRsp_Retcode['SUCC'],
        guideIdList: packet.guideIdList,
        isFinish: true
    } as FinishGuideReportRsp)
}