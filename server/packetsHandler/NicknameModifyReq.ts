import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, NicknameModifyReq, NicknameModifyRsp, NicknameModifyRsp_CmdId, NicknameModifyRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: NicknameModifyReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, NicknameModifyRsp_CmdId.CMD_ID, {
            retcode: NicknameModifyRsp_Retcode['FAIL'],
        } as NicknameModifyRsp)
    }
    const updateUser = await User.findOneAndUpdate({
            uid: user.uid,
        }, {
            $set: { nick: packet.nickname }
    }, {
        returnDocument: "after"
    })
    if(!updateUser.value)return Packet.getInstance().serializeAndSend(socket, NicknameModifyRsp_CmdId.CMD_ID, {
        retcode: NicknameModifyRsp_Retcode['FAIL'],
    } as NicknameModifyRsp)
    session.user = updateUser.value
    console.log(updateUser.value.nick)
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        nickname: updateUser.value.nick||""
    } as GetMainDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, NicknameModifyRsp_CmdId.CMD_ID, {
        retcode: NicknameModifyRsp_Retcode.SUCC,
    } as NicknameModifyRsp)
}