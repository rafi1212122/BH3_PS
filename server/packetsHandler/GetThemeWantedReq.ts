import net from "net"
import { GetThemeWantedReq, GetThemeWantedRsp, GetThemeWantedRsp_CmdId, GetThemeWantedRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetThemeWantedReq) => {
    Packet.getInstance().serializeAndSend(socket, GetThemeWantedRsp_CmdId.CMD_ID, {
        retcode: GetThemeWantedRsp_Retcode.NOT_OPEN,
    } as GetThemeWantedRsp)
}