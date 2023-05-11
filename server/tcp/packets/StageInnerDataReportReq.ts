import { StageInnerDataReportReq, StageInnerDataReportRsp, StageInnerDataReportRsp_CmdId, StageInnerDataReportRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    session.player.lastStageInnerDataReport = packet.data as StageInnerDataReportReq

    const rsp = Packet.encode(StageInnerDataReportRsp, {
        retcode: StageInnerDataReportRsp_Retcode.SUCC
    }, StageInnerDataReportRsp_CmdId.CMD_ID)

    session.send(rsp)
}