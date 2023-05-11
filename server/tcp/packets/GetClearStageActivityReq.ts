import { GetClearStageActivityRsp, GetClearStageActivityRsp_CmdId, GetClearStageActivityRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetClearStageActivityRsp, {
        retcode: GetClearStageActivityRsp_Retcode.SUCC
    }, GetClearStageActivityRsp_CmdId.CMD_ID)

    session.send(rsp)
}