import net from "net"
import logger from "../../util/logger"
import { ReportClientDataVersionReq, ReportClientDataVersionRsp } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ReportClientDataVersionReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['ReportClientDataVersionRsp'], {
        serverVersion: packet.version,
    } as ReportClientDataVersionRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}