import net from "net"
import { GetReclaimActivityDataReq, GetReclaimActivityDataRsp, GetReclaimActivityDataRsp_CmdId, GetReclaimActivityDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetReclaimActivityDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetReclaimActivityDataRsp_CmdId.CMD_ID, {
        retcode: GetReclaimActivityDataRsp_Retcode.NOT_OPEN,
    } as GetReclaimActivityDataRsp)
}