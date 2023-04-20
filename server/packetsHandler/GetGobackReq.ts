import net from "net"
import { GetGobackReq, GetGobackRsp, GetGobackRsp_CmdId, GetGobackRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetGobackReq) => {
    Packet.getInstance().serializeAndSend(socket, GetGobackRsp_CmdId.CMD_ID, {
        retcode: GetGobackRsp_Retcode.SUCC,
        gobackEndTime: 0
    } as GetGobackRsp)
}