import { EndlessType, GetEndlessStatusRsp, GetEndlessStatusRsp_CmdId, GetEndlessStatusRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetEndlessStatusRsp, {
        retcode: GetEndlessStatusRsp_Retcode.SUCC,
        curStatus: {
            endlessType: EndlessType.ENDLESS_TYPE_FRONT,
            canJoinIn: true,
            preGeneralActivityId: 40000162
        }
    }, GetEndlessStatusRsp_CmdId.CMD_ID)

    session.send(rsp)
}