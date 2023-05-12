import { GetAvatarDataRsp, GetAvatarDataRsp_CmdId, AddGoodfeelReq, AddGoodfeelRsp, AddGoodfeelRsp_CmdId, AddGoodfeelRsp_Retcode, GetAvatarDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as AddGoodfeelReq
    const { avatars } = session.player

    const avatar = avatars.find(avatar => avatar.avatarId === data.avatarId)

    if(!avatar) {
        return session.send(Packet.encode(AddGoodfeelRsp, {
            retcode: AddGoodfeelRsp_Retcode.AVATAR_NOT_EXIST
        }, AddGoodfeelRsp_CmdId.CMD_ID))
    }

    if(!avatar.touchGoodfeel) avatar.touchGoodfeel = 0
    if(!avatar.todayHasAddGoodfeel) avatar.todayHasAddGoodfeel = 0
    avatar.touchGoodfeel += data.addGoodfeel || 0
    avatar.todayHasAddGoodfeel += data.addGoodfeel || 0
    
    await avatar.save()

    const rsp = Packet.encode(AddGoodfeelRsp, {
        retcode: AddGoodfeelRsp_Retcode.SUCC
    }, AddGoodfeelRsp_CmdId.CMD_ID)

    session.send(Packet.encode(GetAvatarDataRsp, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: [avatar]
    }, GetAvatarDataRsp_CmdId.CMD_ID), rsp)
}