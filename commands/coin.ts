import { Socket } from "net";
import { ClaimScoinRsp, ClaimScoinRsp_CmdId, ClaimScoinRsp_Retcode, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../BengHuai";
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
        $inc: {
            scoin: parseInt(args[1])
        }
    }, {
        returnDocument: 'after'
    }))
    
    if(!updatedUser.value) return

    Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        materialList: [
            {
                id: 100,
                num: updatedUser.value.scoin
            }
        ],
        vitalityValue: 5900
    } as GetEquipmentDataRsp)

    // Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
    //     retcode: ClaimScoinRsp_Retcode.SUCC,
    //     addScoin: parseInt(args[1])
    // } as ClaimScoinRsp)

    session.user = updatedUser.value
}
