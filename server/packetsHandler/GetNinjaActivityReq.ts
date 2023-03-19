import net from "net"
import { GetNinjaActivityReq, GetNinjaActivityRsp, GetNinjaActivityRsp_CmdId, GetNinjaActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetNinjaActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetNinjaActivityRsp_CmdId.CMD_ID, {
        retcode: GetNinjaActivityRsp_Retcode.NOT_OPEN,
    } as GetNinjaActivityRsp)
}