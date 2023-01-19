import net from "net"
import { GetExBossScheduleReq, GetExBossScheduleRsp, GetExBossScheduleRsp_CmdId, GetExBossScheduleRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetExBossScheduleReq) => {
    Packet.getInstance().serializeAndSend(socket, GetExBossScheduleRsp_CmdId.CMD_ID, {
        retcode: GetExBossScheduleRsp_Retcode.SUCC,
    } as GetExBossScheduleRsp)
}