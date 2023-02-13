import net from "net"
import { GetTowerRaidActivityReq, GetTowerRaidActivityRsp, GetTowerRaidActivityRsp_CmdId, GetTowerRaidActivityRsp_Retcode, UltraEndlessLastSettleRewardNotify, UltraEndlessLastSettleRewardNotify_CmdId } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetTowerRaidActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetTowerRaidActivityRsp_CmdId.CMD_ID, {
        retcode: GetTowerRaidActivityRsp_Retcode.NOT_OPEN,
    } as GetTowerRaidActivityRsp)

    Packet.getInstance().serializeAndSend(socket, UltraEndlessLastSettleRewardNotify_CmdId.CMD_ID, {
        settleInfo: {
            scheduleId: 3185,
            groupLevel: 7,
            maxStageScore: 0,
            groupMemberNum: 20,
            rank: 20,
            cupNumBefore: 1350,
            cupNumAfterScheduleSettle: 1200,
            cupNumAfterSeasonSettle: 1450,
            cupNumBeforeSeasonSettle: 1450,
            cupNum: 1200,
            mmrScore: 1502,
            bufferCupBeforeScheduleSettle: 0,
            bufferCup: 0
        }
    } as UltraEndlessLastSettleRewardNotify)
}