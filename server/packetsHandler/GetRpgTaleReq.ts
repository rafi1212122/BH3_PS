import net from "net"
import { GetRpgTaleFileRsp_Retcode, GetRpgTaleReq, GetRpgTaleRsp, GetRpgTaleRsp_CmdId, GetRpgTaleRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRpgTaleReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRpgTaleRsp_CmdId.CMD_ID, {
        retcode: GetRpgTaleRsp_Retcode.SUCC,
        taleId: 0,
        isAll: true
    } as GetRpgTaleRsp)
}