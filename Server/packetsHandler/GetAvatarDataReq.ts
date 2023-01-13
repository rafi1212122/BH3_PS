import net from "net"
import { AvatarSkill, GetAvatarDataReq, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"

export default (socket: net.Socket, packet: GetAvatarDataReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
            retcode: GetAvatarDataRsp_Retcode['FAIL'],
        } as GetAvatarDataRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: user.avatars.map((avatar)=>{
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
                skillList: Array.isArray(avatar.skillList)&&[...avatar.skillList] as unknown,
                touchGoodfeel: 0,
                todayHasAddGoodfeel: 0,
                dressList: [
                    59101
                ],
                dressId: 59101,
                subStar: 0
            }
        }),
        isAll: true
    } as GetAvatarDataRsp)
}