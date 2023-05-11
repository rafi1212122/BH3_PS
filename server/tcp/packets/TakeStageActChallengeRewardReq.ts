import { GetMainDataRsp, GetMainDataRsp_CmdId, TakeStageActChallengeRewardReq, TakeStageActChallengeRewardRsp, TakeStageActChallengeRewardRsp_CmdId, TakeStageActChallengeRewardRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as TakeStageActChallengeRewardReq
    const { user } = session.player

    const rsp = Packet.encode(TakeStageActChallengeRewardRsp, {
        retcode: TakeStageActChallengeRewardRsp_Retcode.SUCC,
        actId: data.actId,
        challengeNumIndex: data.challengeNumIndex,
        difficulty: data.difficulty,
        failChallengeNumIndexList: data.challengeNumIndexList
    }, TakeStageActChallengeRewardRsp_CmdId.CMD_ID)
    
    session.send(rsp)

    // session.send(Packet.encode(GetMainDataRsp, {
        
    // }, GetMainDataRsp_CmdId.CMD_ID), rsp)
}