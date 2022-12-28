import net from "net"
import { CmdId } from "../../util/CmdId"
import logger from "../../util/logger"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: ClientReportReq) => {
    logger(`${packet.report_type}: ${packet.report_value}`, 'warn', 'ClientReportReq')
    const reply = Packet.getInstance().serialize(CmdId['ClientReportRsp'], {
        retcode: Retcode['SUCC'],
    } as ClientReportRsp)
    socket.write(reply)
}

export interface ClientReportReq {
    report_type?: string,
    report_value?: string
}

export interface ClientReportRsp {
    retcode: Retcode
}