import net from "net"
import { ClaimScoinReq, ClaimScoinRsp, ClaimScoinRsp_CmdId, ClaimScoinRsp_Retcode, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { addItem } from "../../mongodb/Model/Item"

export default async (socket: net.Socket, packet: ClaimScoinReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
            retcode: ClaimScoinRsp_Retcode.FAIL,
        } as ClaimScoinRsp)

    }
    const updatedItem = (await addItem(user.uid, 100, 50000)).value

    if(!updatedItem){
        return Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
            retcode: ClaimScoinRsp_Retcode.FAIL,
        } as ClaimScoinRsp)
    }
    
    Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        materialList: [
            {
                id: updatedItem.id,
                num: updatedItem.num
            }
        ],
        vitalityValue: 0
    } as GetEquipmentDataRsp)

    Packet.getInstance().serializeAndSend(socket, ClaimScoinRsp_CmdId.CMD_ID, {
        retcode: ClaimScoinRsp_Retcode.SUCC,
        addScoin: 50000
    } as ClaimScoinRsp)
}