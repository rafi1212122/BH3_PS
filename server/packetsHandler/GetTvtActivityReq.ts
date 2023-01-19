import net from "net"
import { GetTvtActivityReq, GetTvtActivityRsp, GetTvtActivityRsp_CmdId, GetTvtActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetTvtActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetTvtActivityRsp_CmdId.CMD_ID, {
        retcode: GetTvtActivityRsp_Retcode.NOT_IN_SCHEDULE,
    } as GetTvtActivityRsp)
}