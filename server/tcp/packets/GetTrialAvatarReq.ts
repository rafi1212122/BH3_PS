import { GetTrialAvatarRsp, GetTrialAvatarRsp_CmdId, GetTrialAvatarRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetTrialAvatarRsp, {
        retcode: GetTrialAvatarRsp_Retcode.SUCC,
        avatarList: [],
        isAllUpdate: true
    }, GetTrialAvatarRsp_CmdId.CMD_ID)

    session.send(rsp)
}