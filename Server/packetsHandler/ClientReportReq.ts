import net from "net"
import { ClientReportReq, ClientReportRsp, ClientReportRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import logger from "../../util/logger"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ClientReportReq) => {
    logger(`${packet.reportValue}: ${packet.reportValue}`, 'warn', 'ClientReportReq')
    const reply = Packet.getInstance().serialize(CmdId['ClientReportRsp'], {
        retcode: ClientReportRsp_Retcode['SUCC'],
    } as ClientReportRsp)
    socket.write(reply)
}