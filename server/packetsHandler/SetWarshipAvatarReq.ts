import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, SetWarshipAvatarReq, SetWarshipAvatarRsp, SetWarshipAvatarRsp_CmdId, SetWarshipAvatarRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: SetWarshipAvatarReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, SetWarshipAvatarRsp_CmdId.CMD_ID, {
            retcode: SetWarshipAvatarRsp_Retcode['FAIL'],
        } as SetWarshipAvatarRsp)
    }
    const updateUser = await User.findOneAndUpdate({
        uid: user.uid,
    }, {
        $set: { warshipFirstAvatarId: packet.firstAvatarId }
    }, {
        returnDocument: "after"
    })
    if(!updateUser.value)return Packet.getInstance().serializeAndSend(socket, SetWarshipAvatarRsp_CmdId.CMD_ID, {
        retcode: SetWarshipAvatarRsp_Retcode['FAIL'],
    } as SetWarshipAvatarRsp)
    session.user = updateUser.value
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        warshipAvatar:{
            warshipFirstAvatarId: updateUser.value.warshipFirstAvatarId,
            warshipSecondAvatarId: 0
        }
    } as GetMainDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, SetWarshipAvatarRsp_CmdId.CMD_ID, {
        retcode: SetWarshipAvatarRsp_Retcode.SUCC,
    } as SetWarshipAvatarRsp)
}