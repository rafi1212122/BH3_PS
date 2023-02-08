import net from "net"
import { GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode, SetDressReq, SetDressRsp, SetDressRsp_CmdId, SetDressRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"
import Avatar from "../../mongodb/Model/Avatar"

export default async (socket: net.Socket, packet: SetDressReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, SetDressRsp_CmdId.CMD_ID, {
            retcode: SetDressRsp_Retcode.FAIL,
        } as SetDressRsp)
    }
    
    const updateAvatar = await Avatar.findOneAndUpdate({
            avatarId: packet.avatarId,
            userUid: user.uid
        }, {
            $set: {
                dressId: packet.dressId||parseInt(`59${packet.avatarId}`)
            }
        }, {
            returnDocument: 'after'
        }
    )

    if(!updateAvatar.value)return Packet.getInstance().serializeAndSend(socket, SetDressRsp_CmdId.CMD_ID, {
        retcode: SetDressRsp_Retcode.AVATAR_NOT_EXIST,
    } as SetDressRsp)
    
    session.avatars = await Avatar.find({
        userUid: user.uid
    }).toArray()
    
    Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: [{
            avatarId: updateAvatar.value.avatarId,
            star: updateAvatar.value.star,
            level: updateAvatar.value.level,
            exp: updateAvatar.value.exp,
            fragment: updateAvatar.value.fragment,
            weaponUniqueId: updateAvatar.value.weaponUniqueId,
            stigmataUniqueId1: updateAvatar.value.stigmataUniqueId1,
            stigmataUniqueId2: updateAvatar.value.stigmataUniqueId2,
            stigmataUniqueId3: updateAvatar.value.stigmataUniqueId3,
            skillList: updateAvatar.value.skillList,
            touchGoodfeel: updateAvatar.value.touchGoodfeel,
            todayHasAddGoodfeel: updateAvatar.value.touchGoodfeel,
            dressList: updateAvatar.value.dressList||[
                parseInt(`59${updateAvatar.value.avatarId}`)
            ],
            dressId: updateAvatar.value.dressId||parseInt(`59${updateAvatar.value.avatarId}`),
            subStar: updateAvatar.value.subStar||0
        }],
        isAll: true
    } as GetAvatarDataRsp)

    Packet.getInstance().serializeAndSend(socket, SetDressRsp_CmdId.CMD_ID, {
        retcode: SetDressRsp_Retcode.SUCC,
    } as SetDressRsp)
}