import net from "net"
import { ClientDataType, SetClientDataReq, SetClientDataRsp, SetClientDataRsp_CmdId, SetClientDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { SetClientData } from "../../mongodb/Model/ClientData"

export default async (socket: net.Socket, packet: SetClientDataReq&{ clientData: { data: Uint8Array & string, type: ClientDataType, id: number } }) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(user?.uid&&packet.clientData?.type&&packet.clientData?.data){
        await SetClientData(user?.uid, packet.clientData?.type, String(packet.clientData?.data), packet.clientData?.id)
        return Packet.getInstance().serializeAndSend(socket, SetClientDataRsp_CmdId.CMD_ID, {
            retcode: SetClientDataRsp_Retcode.SUCC,
            type: packet.clientData?.type,
            id: packet.clientData?.id
        } as SetClientDataRsp)
    } 
    Packet.getInstance().serializeAndSend(socket, SetClientDataRsp_CmdId.CMD_ID, {
        retcode: SetClientDataRsp_Retcode.FAIL,
    } as SetClientDataRsp)
}