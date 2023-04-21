import net from "net"
import { GetGodWarReq, GetGodWarRsp, GetGodWarRsp_CmdId, GetGodWarRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetGodWarReq) => {
    Packet.getInstance().serializeAndSend(socket, GetGodWarRsp_CmdId.CMD_ID, {
        retcode: GetGodWarRsp_Retcode.SUCC,
    } as GetGodWarRsp)
}