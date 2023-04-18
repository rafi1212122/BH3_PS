import net from "net"
import { GetExBossScheduleReq, GetExBossScheduleRsp, GetExBossScheduleRsp_CmdId, GetExBossScheduleRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import getTs from '../../util/getTs'

export default (socket: net.Socket, packet: GetExBossScheduleReq) => {
    Packet.getInstance().serializeAndSend(socket, GetExBossScheduleRsp_CmdId.CMD_ID, {
        retcode: GetExBossScheduleRsp_Retcode.SUCC,
        beginTime: parseInt(getTs())-10000,
        endTime: parseInt(getTs())*1.5,
        minLevel: 10,
        imagePath: "",
        rankId: 104,
        scheduleId: 10295
    } as GetExBossScheduleRsp)
}