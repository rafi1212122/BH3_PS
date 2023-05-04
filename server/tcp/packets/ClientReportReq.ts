import { ClientReportReq, ClientReportRsp, ClientReportRsp_CmdId, ClientReportRsp_Retcode } from "../../../resources/proto/BengHuai"
import Config, { VerboseLevel } from "../../../utils/Config"
import Packet from "../Packet"
import Session from "../Session"

export default async (session: Session, packet: Packet) => {
    const data = packet.data as ClientReportReq

    if(Config.LOG_LEVEL > VerboseLevel.NORMAL) session.c.log("ClientReportReq", `${data.reportType}: ${data.reportValue}`)

    session.send(Packet.encode(ClientReportRsp, {
        retcode: ClientReportRsp_Retcode.SUCC
    }, ClientReportRsp_CmdId.CMD_ID))
}