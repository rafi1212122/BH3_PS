import { Socket } from "net";
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode } from "../BengHuai";
import User from "../mongodb/Model/User";
import GameServer from "../server/GameServer";
import Packet from "../server/Packet";

export default async (socket: Socket, args: string[]) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    if(!user) return
    if(isNaN(parseInt(args[1]))) return

    const updatedUser = (await User.findOneAndUpdate({
        uid: user.uid
    }, {
        $set: {
            stamina: parseInt(args[1])
        }
    }, {
        returnDocument: 'after'
    }))
    
    if(!updatedUser.value) return
    
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        stamina: parseInt(args[1])
    } as GetMainDataRsp)

    session.user = updatedUser.value
}
