import net from "net"
import { UltraEndlessReportSiteFloorReq, UltraEndlessReportSiteFloorRsp, UltraEndlessReportSiteFloorRsp_CmdId, UltraEndlessReportSiteFloorRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UltraEndlessReportSiteFloorReq) => {
    Packet.getInstance().serializeAndSend(socket, UltraEndlessReportSiteFloorRsp_CmdId.CMD_ID, {
        retcode: UltraEndlessReportSiteFloorRsp_Retcode.SUCC,
        floor: packet.floor,
        isUpFloor: packet.isUpFloor,
        siteId: packet.siteId
    } as UltraEndlessReportSiteFloorRsp)
}