import { SetWarshipAvatarReq, SetWarshipAvatarRsp, SetWarshipAvatarRsp_CmdId, SetWarshipAvatarRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetMainDataReq from "./GetMainDataReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as SetWarshipAvatarReq
    const { user } = session.player

    if(data.firstAvatarId) {
        user.$set('warshipAvatar', data)
        await user.save()
    }

    const rsp = Packet.encode(SetWarshipAvatarRsp, {
        retcode: SetWarshipAvatarRsp_Retcode.SUCC
    }, SetWarshipAvatarRsp_CmdId.CMD_ID)

    await GetMainDataReq(session, { ...packet, data: {} })
    session.send(rsp)
}