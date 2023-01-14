import net from "net"
import { SetClientDataReq, SetClientDataRsp, SetClientDataRsp_CmdId, SetClientDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: SetClientDataReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    Packet.getInstance().serializeAndSend(socket, SetClientDataRsp_CmdId.CMD_ID, {
        retcode: SetClientDataRsp_Retcode.SUCC,
        type: packet.clientData?.type,
        id: packet.clientData?.id||0
    } as SetClientDataRsp)
}