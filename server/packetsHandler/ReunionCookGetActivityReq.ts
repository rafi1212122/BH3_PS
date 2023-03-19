import net from "net"
import { ReunionCookGetActivityReq, ReunionCookGetActivityRsp, ReunionCookGetActivityRsp_CmdId, ReunionCookGetActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ReunionCookGetActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, ReunionCookGetActivityRsp_CmdId.CMD_ID, {
        retcode: ReunionCookGetActivityRsp_Retcode.NOT_OPEN,
    } as ReunionCookGetActivityRsp)
}