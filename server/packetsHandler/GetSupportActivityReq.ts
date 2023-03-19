import net from "net"
import { GetSupportActivityReq, GetSupportActivityRsp, GetSupportActivityRsp_CmdId, GetSupportActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetSupportActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetSupportActivityRsp_CmdId.CMD_ID, {
        retcode: GetSupportActivityRsp_Retcode.NOT_OPEN,
    } as GetSupportActivityRsp)
}