import net from "net"
import logger from "../../util/logger"
import { ClientReportReq, ClientReportRsp, ClientReportRsp_CmdId, ClientReportRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ClientReportReq) => {
    logger(`${packet.reportType}: ${packet.reportValue}`, 'warn', 'ClientReport')
    Packet.getInstance().serializeAndSend(socket, ClientReportRsp_CmdId.CMD_ID, {
        retcode: ClientReportRsp_Retcode['SUCC'],
    } as ClientReportRsp)
}