import { GetStageDataReq, GetStageDataRsp, GetStageDataRsp_CmdId, GetStageDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import LevelData from "../../../utils/excel/StageData";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as GetStageDataReq
    const { finishedStages } = session.player.user

    const rsp = Packet.encode(GetStageDataRsp, {
        retcode: GetStageDataRsp_Retcode.SUCC,
        stageList: LevelData.all().map(stage => ({
            id: stage.levelId,
            isDone: true,
            progress: stage.maxProgress,
            enterTimes: 1
        }))
        // real server gameplay mode
        // stageList: data.stageIdList ? data.stageIdList.map(id => ({ id })) : finishedStages.length ? [...finishedStages, { id: LevelData.nextLevelFromId(finishedStages[finishedStages.length-1].id || 10101).levelId }] : [{ id: 10101 }]
    }, GetStageDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}