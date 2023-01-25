import net from "net"
import { GetAvatarDataReq, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import GetAvatarTeamDataReq from "./GetAvatarTeamDataReq"

export default (socket: net.Socket, packet: GetAvatarDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
            retcode: GetAvatarDataRsp_Retcode['FAIL'],
        } as GetAvatarDataRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: session.avatars.map((avatar)=>{
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
        isAll: true
    } as GetAvatarDataRsp)

    //making sure teamdict created
    GetAvatarTeamDataReq(socket, {})
}