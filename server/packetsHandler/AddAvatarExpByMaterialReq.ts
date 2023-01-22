import net from "net"
import { AddAvatarExpByMaterialReq, AddAvatarExpByMaterialRsp, AddAvatarExpByMaterialRsp_CmdId, AddAvatarExpByMaterialRsp_Retcode, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import Avatar from "../../mongodb/Model/Avatar"

export default async (socket: net.Socket, packet: AddAvatarExpByMaterialReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, AddAvatarExpByMaterialRsp_CmdId.CMD_ID, {
            retcode: AddAvatarExpByMaterialRsp_Retcode.FAIL,
        } as AddAvatarExpByMaterialRsp)

    }
    const updatedAvatar = (await Avatar.findOneAndUpdate({
        avatarId: packet.avatarId,
        userUid: user.uid,
    }, {
        $set: { level: 80 }
    }, { returnDocument: 'after' })).value

    if(!updatedAvatar){
        return Packet.getInstance().serializeAndSend(socket, AddAvatarExpByMaterialRsp_CmdId.CMD_ID, {
            retcode: AddAvatarExpByMaterialRsp_Retcode.AVATAR_NOT_EXIST,
        } as AddAvatarExpByMaterialRsp)
    }

    Packet.getInstance().serializeAndSend(socket, AddAvatarExpByMaterialRsp_CmdId.CMD_ID, {
        retcode: AddAvatarExpByMaterialRsp_Retcode.SUCC,
    } as AddAvatarExpByMaterialRsp)

    Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: [
            {
                avatarId: updatedAvatar.avatarId,
                star: updatedAvatar.star,
                level: updatedAvatar.level,
                exp: updatedAvatar.exp,
                fragment: updatedAvatar.fragment,
                weaponUniqueId: updatedAvatar.weaponUniqueId,
                stigmataUniqueId1: updatedAvatar.stigmataUniqueId1,
                stigmataUniqueId2: updatedAvatar.stigmataUniqueId2,
                stigmataUniqueId3: updatedAvatar.stigmataUniqueId3,
                skillList: updatedAvatar.skillList,
                touchGoodfeel: updatedAvatar.touchGoodfeel,
                todayHasAddGoodfeel: updatedAvatar.touchGoodfeel,
                dressList: [
                    59101
                ],
                dressId: 59101,
                subStar: 0
            }
        ],
        isAll: true
    } as GetAvatarDataRsp)
}