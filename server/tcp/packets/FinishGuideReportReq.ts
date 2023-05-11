import { FinishGuideReportReq, FinishGuideReportRsp, FinishGuideReportRsp_CmdId, FinishGuideReportRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as FinishGuideReportReq

    const rsp = Packet.encode(FinishGuideReportRsp, {
        retcode: FinishGuideReportRsp_Retcode.SUCC,
        guideIdList: data.guideIdList,
        isFinish: true
    }, FinishGuideReportRsp_CmdId.CMD_ID)

    session.send(rsp)
}