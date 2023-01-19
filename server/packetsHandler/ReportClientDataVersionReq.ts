import net from "net"
import logger from "../../util/logger"
import { ReportClientDataVersionReq, ReportClientDataVersionRsp, ReportClientDataVersionRsp_CmdId } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ReportClientDataVersionReq) => {
    Packet.getInstance().serializeAndSend(socket, ReportClientDataVersionRsp_CmdId.CMD_ID, {
        serverVersion: packet.version,
    } as ReportClientDataVersionRsp)
}