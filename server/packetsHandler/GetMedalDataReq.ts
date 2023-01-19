import net from "net"
import { GetMedalDataReq, GetMedalDataRsp, GetMedalDataRsp_CmdId, GetMedalDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMedalDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMedalDataRsp_CmdId.CMD_ID, {
        retcode: GetMedalDataRsp_Retcode.SUCC,
        isAll: true
    } as GetMedalDataRsp)
}