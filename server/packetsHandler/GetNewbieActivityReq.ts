import net from "net"
import { GetNewbieActivityReq, GetNewbieActivityRsp, GetNewbieActivityRsp_CmdId, GetNewbieActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import getTs from '../../util/getTs'

export default (socket: net.Socket, packet: GetNewbieActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetNewbieActivityRsp_CmdId.CMD_ID, {
        retcode: GetNewbieActivityRsp_Retcode.SUCC,
        scheduleId: 129,
        endTime: parseInt(getTs()) + 1000000,
        challenge: {
            isTakeChallengeReward: false,
            enterTimes: 0
        },
        levelRush: {
            isPurchased: true,
            freeRewardMaxTakeLevel: 15,
            purchaseRewardMaxTakeLevel: 15
        }
    } as GetNewbieActivityRsp)
}