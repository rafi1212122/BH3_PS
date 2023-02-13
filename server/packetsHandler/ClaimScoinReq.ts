import net from "net"
import { ClaimScoinReq, ClaimScoinRsp, ClaimScoinRsp_CmdId, ClaimScoinRsp_Retcode, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: ClaimScoinReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
            retcode: ClaimScoinRsp_Retcode.FAIL,
        } as ClaimScoinRsp)

    }
    const updatedUser = (await User.findOneAndUpdate({
        uid: user.uid
    }, {
        $inc: {
            scoin: 70000
        }
    }, { returnDocument: 'after' } )).value

    if(!updatedUser){
        return Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
            retcode: ClaimScoinRsp_Retcode.FAIL,
        } as ClaimScoinRsp)
    }
    
    session.user = updatedUser

    Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        materialList: [
            {
                id: 100,
                num: updatedUser.scoin
            }
        ],
        vitalityValue: 5900
    } as GetEquipmentDataRsp)

    Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
        retcode: ClaimScoinRsp_Retcode.SUCC,
        addScoin: 70000
    } as ClaimScoinRsp)
}