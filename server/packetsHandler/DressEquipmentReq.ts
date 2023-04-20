import net from "net"
import { DressEquipmentReq, DressEquipmentRsp, DressEquipmentRsp_CmdId, DressEquipmentRsp_Retcode, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import Avatar, { dressEquipment } from "../../mongodb/Model/Avatar"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: DressEquipmentReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, DressEquipmentRsp_CmdId.CMD_ID, {
            retcode: DressEquipmentRsp_Retcode['FAIL'],
        } as DressEquipmentRsp)
    }
    
    await dressEquipment(user.uid, packet.avatarId, packet.uniqueId, packet.slot)

    session.avatars = await Avatar.find({
        userUid: session.user.uid
    }).toArray()

    Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: session.avatars.filter(a=>a.avatarId==packet.avatarId).map((avatar)=>{
            return{
                avatarId: avatar.avatarId,
                star: avatar.star,
                level: avatar.level,
                exp: avatar.exp,
                fragment: avatar.fragment,
                weaponUniqueId: avatar.weaponUniqueId,
                stigmataUniqueId1: avatar.stigmataUniqueId1,
                stigmataUniqueId2: avatar.stigmataUniqueId2,
                stigmataUniqueId3: avatar.stigmataUniqueId3,
                skillList: avatar.skillList,
                touchGoodfeel: avatar.touchGoodfeel,
                todayHasAddGoodfeel: avatar.touchGoodfeel,
                dressList: avatar.dressList||[
                    parseInt(`59${avatar.avatarId}`)
                ],
                dressId: avatar.dressId||parseInt(`59${avatar.avatarId}`),
                subStar: avatar.subStar||0
            }
        }),
    } as GetAvatarDataRsp)
    Packet.getInstance().serializeAndSend(socket, DressEquipmentRsp_CmdId.CMD_ID, {
        retcode: DressEquipmentRsp_Retcode['SUCC'],
    } as DressEquipmentRsp)
}