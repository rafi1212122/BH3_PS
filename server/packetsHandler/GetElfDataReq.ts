import net from "net"
import { GetElfDataReq, GetElfDataRsp, GetElfDataRsp_CmdId, GetElfDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetElfDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetElfDataRsp_CmdId.CMD_ID, {
        retcode: GetElfDataRsp_Retcode.SUCC,
        isTakeCompensation: false,
    } as GetElfDataRsp)
}