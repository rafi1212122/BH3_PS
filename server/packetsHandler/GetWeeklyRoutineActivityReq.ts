import net from "net"
import { GetWeeklyRoutineActivityReq, GetWeeklyRoutineActivityRsp, GetWeeklyRoutineActivityRsp_CmdId, GetWeeklyRoutineActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWeeklyRoutineActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWeeklyRoutineActivityRsp_CmdId.CMD_ID, {
        retcode: GetWeeklyRoutineActivityRsp_Retcode.NOT_IN_SCHEDULE,
    } as GetWeeklyRoutineActivityRsp)
}