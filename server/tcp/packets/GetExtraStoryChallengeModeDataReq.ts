import { GetExtraStoryChallengeModeDataReq, GetExtraStoryChallengeModeDataRsp, GetExtraStoryChallengeModeDataRsp_CmdId, GetExtraStoryChallengeModeDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetExtraStoryChallengeModeDataReq

    const rsp = Packet.encode(GetExtraStoryChallengeModeDataRsp, {
        retcode: GetExtraStoryChallengeModeDataRsp_Retcode.SUCC,
        chapterId: data.chapterId,
        isCanReset: true,
        chooseDifficulty: 0
    }, GetExtraStoryChallengeModeDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}