import { GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { avatars } = session.player

    const rsp = Packet.encode(GetAvatarDataRsp, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: avatars,
        isAll: true
    }, GetAvatarDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}