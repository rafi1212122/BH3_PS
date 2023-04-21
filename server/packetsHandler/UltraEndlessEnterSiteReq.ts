import net from "net"
import { UltraEndlessEnterSiteReq, UltraEndlessEnterSiteRsp, UltraEndlessEnterSiteRsp_CmdId, UltraEndlessEnterSiteRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UltraEndlessEnterSiteReq) => {
    Packet.getInstance().serializeAndSend(socket, UltraEndlessEnterSiteRsp_CmdId.CMD_ID, {
        retcode: UltraEndlessEnterSiteRsp_Retcode.SUCC,
        siteId: packet.siteId
    } as UltraEndlessEnterSiteRsp)
}