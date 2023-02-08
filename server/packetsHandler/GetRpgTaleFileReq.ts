import net from "net"
import { GetRpgTaleFileReq, GetRpgTaleFileRsp, GetRpgTaleFileRsp_CmdId, GetRpgTaleFileRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRpgTaleFileReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRpgTaleFileRsp_CmdId.CMD_ID, {
        retcode: GetRpgTaleFileRsp_Retcode.SUCC,
        taleId: packet.taleId
    } as GetRpgTaleFileRsp)
}