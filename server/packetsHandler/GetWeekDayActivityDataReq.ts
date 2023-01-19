import net from "net"
import { GetWeekDayActivityDataReq, GetWeekDayActivityDataRsp, GetWeekDayActivityDataRsp_CmdId, GetWeekDayActivityDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWeekDayActivityDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWeekDayActivityDataRsp_CmdId.CMD_ID, {
        retcode: GetWeekDayActivityDataRsp_Retcode.SUCC,
        // activityList: [
        //     {
        //         activityId: 1400,
        //         stageIdList: [
        //             45455
        //         ],
        //         enterTimes: 10,
        //         beginTime: 1673208000,
        //         endTime: 1673812799,
        //         activityEndTime: 1880294399,
        //         exchangeTimes: 0,
        //         mpRaidNextRefreshTime: 0,
        //         mpRaidResetTimes: 0,
        //         mpMemberTodayEnterTimes: 0,
        //         mpRaidScoreSum: 0
        //     }
        // ]
    } as GetWeekDayActivityDataRsp)
}