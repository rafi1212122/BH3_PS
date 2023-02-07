import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, SetSelfDescReq, SetSelfDescRsp, SetSelfDescRsp_CmdId, SetSelfDescRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: SetSelfDescReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, SetSelfDescRsp_CmdId.CMD_ID, {
            retcode: SetSelfDescRsp_Retcode['FAIL'],
        } as SetSelfDescRsp)
    }
    const updateUser = await User.findOneAndUpdate({
        uid: user.uid
    }, {
        $set: { selfDesc: packet.selfDesc }
    }, {
        returnDocument: "after"
    })

    if(!updateUser.value||!packet.selfDesc) return Packet.getInstance().serializeAndSend(socket, SetSelfDescRsp_CmdId.CMD_ID, {
        retcode: SetSelfDescRsp_Retcode['FAIL'],
    } as SetSelfDescRsp)
    
    session.user = updateUser.value
    
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        selfDesc: session.user.selfDesc
    } as GetMainDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, SetSelfDescRsp_CmdId.CMD_ID, {
        retcode: SetSelfDescRsp_Retcode.SUCC,
    } as SetSelfDescRsp)
}