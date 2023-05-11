import { GetStageRecommendAvatarReq, GetStageRecommendAvatarRsp, GetStageRecommendAvatarRsp_CmdId, GetStageRecommendAvatarRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetStageRecommendAvatarReq

    const rsp = Packet.encode(GetStageRecommendAvatarRsp, {
        retcode: GetStageRecommendAvatarRsp_Retcode.SUCC,
        stageRecommendAvatarList: data.idList?.map(id => ({ id }))
    }, GetStageRecommendAvatarRsp_CmdId.CMD_ID)

    session.send(rsp)
}