import net from "net"
import { ReportClientDataVersionReq, ReportClientDataVersionRsp } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ReportClientDataVersionReq) => {
    const reply = Packet.getInstance().serialize(CmdId['ReportClientDataVersionRsp'], {
        serverVersion: packet.version,
    } as ReportClientDataVersionRsp)
    socket.write(reply)
}