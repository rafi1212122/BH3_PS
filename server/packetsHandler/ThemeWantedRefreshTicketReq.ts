import net from "net"
import { ThemeWantedRefreshTicketReq, ThemeWantedRefreshTicketRsp, ThemeWantedRefreshTicketRsp_CmdId, ThemeWantedRefreshTicketRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ThemeWantedRefreshTicketReq) => {
    Packet.getInstance().serializeAndSend(socket, ThemeWantedRefreshTicketRsp_CmdId.CMD_ID, {
        retcode: ThemeWantedRefreshTicketRsp_Retcode.SUCC,
    } as ThemeWantedRefreshTicketRsp)
}