import net from "net"
import { ClientCheckNetworkEnvReq, ClientCheckNetworkEnvRsp, ClientCheckNetworkEnvRsp_CmdId, ClientCheckNetworkEnvRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ClientCheckNetworkEnvReq) => {
    Packet.getInstance().serializeAndSend(socket, ClientCheckNetworkEnvRsp_CmdId.CMD_ID, {
        retcode: ClientCheckNetworkEnvRsp_Retcode.SUCC,
        tokenStr: packet.tokenStr
    } as ClientCheckNetworkEnvRsp)
}