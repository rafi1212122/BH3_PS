import net from "net"
import { GetGrandKeyReq, GetGrandKeyRsp, GetGrandKeyRsp_CmdId, GetGrandKeyRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetGrandKeyReq) => {
    Packet.getInstance().serializeAndSend(socket, GetGrandKeyRsp_CmdId.CMD_ID, {
        retcode: GetGrandKeyRsp_Retcode.SUCC,
        isAll: true
    } as GetGrandKeyRsp)
}