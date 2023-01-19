import net from "net"
import { ClientDataType, GetClientDataReq, GetClientDataRsp, GetClientDataRsp_CmdId, GetClientDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: GetClientDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    return Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
        retcode: GetClientDataRsp_Retcode.NOT_FOUND,
        id: 0,
        type: packet.type
    } as GetClientDataRsp)
}