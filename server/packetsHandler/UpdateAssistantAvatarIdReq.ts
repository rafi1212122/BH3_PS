import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, UpdateAssistantAvatarIdReq, UpdateAssistantAvatarIdRsp, UpdateAssistantAvatarIdRsp_CmdId, UpdateAssistantAvatarIdRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: UpdateAssistantAvatarIdReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, UpdateAssistantAvatarIdRsp_CmdId.CMD_ID, {
            retcode: UpdateAssistantAvatarIdRsp_Retcode['FAIL'],
        } as UpdateAssistantAvatarIdRsp)
    }
    const updateUser = await User.findOneAndUpdate({
        uid: user.uid,
    }, {
        $set: { assistantAvatarId: packet.avatarId }
    }, {
        returnDocument: 'after'
    })
    if(!updateUser.value)return Packet.getInstance().serializeAndSend(socket, UpdateAssistantAvatarIdRsp_CmdId.CMD_ID, {
        retcode: UpdateAssistantAvatarIdRsp_Retcode['FAIL'],
    } as UpdateAssistantAvatarIdRsp)
    session.user = updateUser.value
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        assistantAvatarId: packet.avatarId
    } as GetMainDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, UpdateAssistantAvatarIdRsp_CmdId.CMD_ID, {
        retcode: UpdateAssistantAvatarIdRsp_Retcode.SUCC,
    } as UpdateAssistantAvatarIdRsp)
}