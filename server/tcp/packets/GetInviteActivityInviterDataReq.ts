import { GetInviteActivityInviterDataRsp, GetInviteActivityInviterDataRsp_CmdId, GetInviteActivityInviterDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetInviteActivityInviterDataRsp, {
        retcode: GetInviteActivityInviterDataRsp_Retcode.LEVEL_LACK
    }, GetInviteActivityInviterDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}