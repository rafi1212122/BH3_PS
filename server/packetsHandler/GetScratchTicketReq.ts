import net from "net"
import { GetScratchTicketReq, GetScratchTicketRsp, GetScratchTicketRsp_CmdId, GetScratchTicketRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetScratchTicketReq) => {
    Packet.getInstance().serializeAndSend(socket, GetScratchTicketRsp_CmdId.CMD_ID, {
        retcode: GetScratchTicketRsp_Retcode.ACTIVITY_NOT_OPEN,
    } as GetScratchTicketRsp)
}