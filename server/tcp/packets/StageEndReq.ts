import { isDocument } from "@typegoose/typegoose";
import { GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, StageEndReq, StageEndReqBody, StageEndRsp, StageEndRsp_CmdId, StageEndRsp_Retcode, StageEndStatus } from "../../../resources/proto/BengHuai";
import LevelData from "../../../utils/excel/StageData";
import Packet from "../Packet";
import Session from "../Session";
import ChapterGroupGetDataReq from "./ChapterGroupGetDataReq";
import GetMainDataReq from "./GetMainDataReq";
import GetWorldMapDataReq from "./GetWorldMapDataReq";
import GetStageDataReq from "./GetStageDataReq";
import GetEquipmentDataReq from "./GetEquipmentDataReq";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as StageEndReq
    const { user } = session.player
    const decodedBody = data.body ? StageEndReqBody.decode(data.body) : {}
    const levelData = LevelData.fromId(decodedBody.stageId || 10101)
    
    if(decodedBody.stageId === 10101) user.$set('isFirstLogin', false)

    if(decodedBody.endStatus !== StageEndStatus.STAGE_WIN) {
        return session.send(Packet.encode(StageEndRsp, {
            retcode: StageEndRsp_Retcode.SUCC,
            stageId: decodedBody.stageId,
            endStatus: decodedBody.endStatus
        }, StageEndRsp_CmdId.CMD_ID))
    }

    if(levelData) {
        user.$inc('stamina', -levelData.staminaCost)
    }
    user.$inc('hcoin', 15)
    user.addLevel(100, session)

    if (isDocument(user.equipment)) {
        if(decodedBody.dropItemList) {
            for (const dropItem of decodedBody.dropItemList) {
                if(dropItem.itemId) user.equipment.addMaterial(dropItem.itemId, dropItem.num)
            }
        }

        await user.equipment.addMaterial(100, decodedBody.scoinReward).save()
        await GetEquipmentDataReq(session, { ...packet, data: { } })
    }

    user.finishedStages.push({
        id: decodedBody.stageId,
        progress: levelData?.maxProgress,
        enterTimes: 1,
        challengeIndexList: decodedBody.challengeIndexList,
        minStageTime: session.player.lastStageInnerDataReport.avatarList?.map(a => a.totalTime).reduce((prev, curr) => (curr && prev) ? prev + curr : 0),
        isDone: true
    })

    await user.save()
    await GetMainDataReq(session, { ...packet, data: { } })
    await user.addAvatarExp(decodedBody.avatarExpReward || 0, session, ...(session.player.lastStageInnerDataReport?.avatarList || []).map(av => av.avatarId || 0))
    await GetWorldMapDataReq(session, { ...packet, data: { } })
    await ChapterGroupGetDataReq(session, { ...packet, data: { } })

    await GetStageDataReq(session, { ...packet, data: { } })

    const rsp = Packet.encode(StageEndRsp, {
        retcode: StageEndRsp_Retcode.SUCC,
        stageId: decodedBody.stageId,
        playerExpReward: 100,
        avatarExpReward: decodedBody.avatarExpReward,
        scoinReward: decodedBody.scoinReward,
        challengeList: decodedBody.challengeIndexList?.map(i => ({
            challengeIndex: i,
            reward: {
                hcoin: 5
            }
        })),
        endStatus: decodedBody.endStatus
    }, StageEndRsp_CmdId.CMD_ID)

    session.send(rsp)
}