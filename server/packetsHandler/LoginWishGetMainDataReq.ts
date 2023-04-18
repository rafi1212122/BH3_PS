import net from "net"
import { LoginWishGetMainDataReq, LoginWishGetMainDataRsp, LoginWishGetMainDataRsp_CmdId, LoginWishGetMainDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: LoginWishGetMainDataReq) => {
    Packet.getInstance().serializeAndSend(socket, LoginWishGetMainDataRsp_CmdId.CMD_ID, {
        retcode: LoginWishGetMainDataRsp_Retcode.SUCC,
    } as LoginWishGetMainDataRsp)
}