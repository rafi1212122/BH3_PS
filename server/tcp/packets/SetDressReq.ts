import { GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode, SetDressReq, SetDressRsp, SetDressRsp_CmdId, SetDressRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as SetDressReq
    const { avatars } = session.player

    let avatar = avatars.find(avatar => avatar.avatarId === data.avatarId)

    if(!avatar) {
        return session.send(Packet.encode(SetDressRsp, {
            retcode: SetDressRsp_Retcode.AVATAR_NOT_EXIST
        }, SetDressRsp_CmdId.CMD_ID))
    } else if(!data.dressId) {
        return session.send(Packet.encode(SetDressRsp, {
            retcode: SetDressRsp_Retcode.DRESS_NOT_EXIST
        }, SetDressRsp_CmdId.CMD_ID))
    }
    
    await avatar.$set('dressId', data.dressId).save()

    const rsp = Packet.encode(SetDressRsp, {
        retcode: SetDressRsp_Retcode.SUCC
    }, SetDressRsp_CmdId.CMD_ID)

    session.send(Packet.encode(GetAvatarDataRsp, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: [avatar]
    }, GetAvatarDataRsp_CmdId.CMD_ID), rsp)
}