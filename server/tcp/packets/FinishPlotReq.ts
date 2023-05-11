import { FinishPlotReq, FinishPlotRsp, FinishPlotRsp_CmdId, FinishPlotRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as FinishPlotReq

    const rsp = Packet.encode(FinishPlotRsp, {
        retcode: FinishPlotRsp_Retcode.SUCC,
        plotType: data.plotType,
        plotId: data.plotId,
        dialogId: data.dialogId
    }, FinishPlotRsp_CmdId.CMD_ID)

    session.send(rsp)
}