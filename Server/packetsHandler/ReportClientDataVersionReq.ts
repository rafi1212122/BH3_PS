import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ReportClientDataVersionReq) => {
    const reply = Packet.getInstance().serialize(CmdId['ReportClientDataVersionRsp'], {
        server_version: packet.version,
    } as ReportClientDataVersionRsp)
    socket.write(reply)
}

export interface ReportClientDataVersionReq {
    version?: number,
}

export interface ReportClientDataVersionRsp {
    server_version?: number
}