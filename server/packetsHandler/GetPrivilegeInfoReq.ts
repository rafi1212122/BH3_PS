import net from "net"
import { GetPrivilegeInfoReq, GetPrivilegeInfoRsp, GetPrivilegeInfoRsp_CmdId, GetPrivilegeInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPrivilegeInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetPrivilegeInfoRsp_CmdId.CMD_ID, {
        retcode: GetPrivilegeInfoRsp_Retcode.SUCC,
    } as GetPrivilegeInfoRsp)
}