import net from "net"
import { ClientDataType, GetClientDataReq, GetClientDataRsp, GetClientDataRsp_CmdId, GetClientDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { getClientData } from "../../mongodb/Model/ClientData"

export default async (socket: net.Socket, packet: GetClientDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user?.uid){
        return Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
            retcode: GetClientDataRsp_Retcode.FAIL,
        } as GetClientDataRsp)
    }
    const data = await getClientData(user?.uid, packet.type, packet.id)
    if(data){
        return Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
            retcode: GetClientDataRsp_Retcode.SUCC,
            id: packet.id,
            type: packet.type,
            clientDataList: [{
                data: data.data,
                id: data.id,
                type: data.type
            }]
        } as GetClientDataRsp&{ clientDataList: { data: string, id: number, type: ClientDataType }[] })
    }
    Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
        retcode: GetClientDataRsp_Retcode.NOT_FOUND,
        id: packet.id,
        type: packet.type
    } as GetClientDataRsp)
}