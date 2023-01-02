import net from "net"
import logger from "../../util/logger"
import { ClientReportReq, ClientReportRsp, ClientReportRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ClientReportReq, cmdId: number) => {
    logger(`${packet.reportType}: ${packet.reportValue}`, 'warn', 'ClientReportReq')
    const reply = Packet.getInstance().serialize(CmdId['ClientReportRsp'], {
        retcode: ClientReportRsp_Retcode['SUCC'],
    } as ClientReportRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}