import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, SetWarshipReq, SetWarshipRsp, SetWarshipRsp_CmdId, SetWarshipRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: SetWarshipReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, SetWarshipRsp_CmdId.CMD_ID, {
            retcode: SetWarshipRsp_Retcode.FAIL,
        } as SetWarshipRsp)
    }
    const updateUser = await User.findOneAndUpdate({
            uid: user.uid,
        }, {
            $set: { warshipId: packet.warshipId||0 }
        }, {
            returnDocument: 'after'
        }
    )
    if(!updateUser.value)return Packet.getInstance().serializeAndSend(socket, SetWarshipRsp_CmdId.CMD_ID, {
        retcode: SetWarshipRsp_Retcode.FAIL,
    } as SetWarshipRsp)
    session.user = updateUser.value
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        warshipTheme: {
            warshipId: session.user.warshipId
        }
    } as GetMainDataRsp)
    Packet.getInstance().serializeAndSend(socket, SetWarshipRsp_CmdId.CMD_ID, {
        retcode: SetWarshipRsp_Retcode.SUCC,
    } as SetWarshipRsp)
}