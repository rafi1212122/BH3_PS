import net from "net"
import { GetExBossInfoReq, GetExBossInfoRsp, GetExBossInfoRsp_CmdId, GetExBossInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetExBossInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetExBossInfoRsp_CmdId.CMD_ID, {
        retcode: GetExBossInfoRsp_Retcode.SUCC,
        bossInfo: {
            enterTimes: 0,
            scheduleId: 10295,
            rankId: 104,
            bossIdList: [
                {
                    bossId: 34126
                },
                // {
                //     bossId: 41126
                // },
                {
                    bossId: 40126
                },
                {
                    bossId: 39126
                }
            ],
            nowScheduleId: 10295,
            maxSweepLevel: 0
        }
    } as GetExBossInfoRsp)
}