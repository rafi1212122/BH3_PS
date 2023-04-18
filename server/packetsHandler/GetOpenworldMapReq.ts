import net from "net"
import { GetOpenworldMapReq, GetOpenworldMapRsp, GetOpenworldMapRsp_CmdId, GetOpenworldMapRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetOpenworldMapReq) => {
    Packet.getInstance().serializeAndSend(socket, GetOpenworldMapRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldMapRsp_Retcode.SUCC,
        mapId: packet.mapId,
    } as GetOpenworldMapRsp)
}