import net from "net"
import { ReportOpenworldSpawnPointReq, ReportOpenworldSpawnPointRsp, ReportOpenworldSpawnPointRsp_CmdId, ReportOpenworldSpawnPointRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { setSpawn } from "../../mongodb/Model/OpenworldSpawn"

export default async (socket: net.Socket, packet: ReportOpenworldSpawnPointReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(user){
        await setSpawn(user.uid, packet.pointInfo, packet.mapId)
    }
    Packet.getInstance().serializeAndSend(socket, ReportOpenworldSpawnPointRsp_CmdId.CMD_ID, {
        retcode: ReportOpenworldSpawnPointRsp_Retcode.SUCC,
        mapId: packet.mapId,
        pointInfo: packet.pointInfo,
    } as ReportOpenworldSpawnPointRsp)
}