import net from "net"
import { GetOfflineResourceDataReq, GetOfflineResourceDataRsp, GetOfflineResourceDataRsp_CmdId, GetOfflineResourceDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetOfflineResourceDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetOfflineResourceDataRsp_CmdId.CMD_ID, {
        retcode: GetOfflineResourceDataRsp_Retcode.NOT_IN_SCHEDULE,
    } as GetOfflineResourceDataRsp)
}