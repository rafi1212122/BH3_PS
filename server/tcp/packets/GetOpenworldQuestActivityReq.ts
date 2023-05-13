import { GetOpenworldQuestActivityReq, GetOpenworldQuestActivityRsp, GetOpenworldQuestActivityRsp_CmdId, GetOpenworldQuestActivityRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetOpenworldQuestActivityRsp, {
        retcode: GetOpenworldQuestActivityRsp_Retcode.NOT_OPEN
    }, GetOpenworldQuestActivityRsp_CmdId.CMD_ID)

    session.send(rsp)
}