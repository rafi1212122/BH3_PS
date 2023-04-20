import net from "net"
import { GetWikiDataReq, GetWikiDataRsp, GetWikiDataRsp_CmdId, GetWikiDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWikiDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWikiDataRsp_CmdId.CMD_ID, {
        retcode: GetWikiDataRsp_Retcode.SUCC,
    } as GetWikiDataRsp)
}