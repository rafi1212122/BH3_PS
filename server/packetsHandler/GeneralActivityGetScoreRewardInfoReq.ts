import net from "net"
import { GeneralActivityGetScoreRewardInfoReq, GeneralActivityGetScoreRewardInfoRsp, GeneralActivityGetScoreRewardInfoRsp_CmdId, GeneralActivityGetScoreRewardInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GeneralActivityGetScoreRewardInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GeneralActivityGetScoreRewardInfoRsp_CmdId.CMD_ID, {
        retcode: GeneralActivityGetScoreRewardInfoRsp_Retcode['SUCC'],
        scoreInfoList: Array.isArray(packet.activityIdList)&&packet.activityIdList.map(id => {
            return {
                activityId: id,
                curScore: 0
            }
        })
    } as GeneralActivityGetScoreRewardInfoRsp)
}