import { GetOpenworldMapReq, GetOpenworldMapRsp, GetOpenworldMapRsp_CmdId, GetOpenworldMapRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetOpenworldMapReq

    const rsp = Packet.encode(GetOpenworldMapRsp, {
        retcode: GetOpenworldMapRsp_Retcode.SUCC,
        mapId: data.mapId,
        cycle: 0,
        eventList: [],
        eventRandomSeed: 365767841,
        spawnPoint: "",
        overViewList: [],
        statList: [
          {
            id: 1,
            maxNum: 0,
            finishNum: 0
          },
          {
            id: 3,
            maxNum: 0,
            finishNum: 0
          },
          {
            id: 4,
            maxNum: 0,
            finishNum: 0
          }
        ],
        status: 3,
        questData: {
          level: 0,
          star: 0,
          isOpen: false,
          dayOpenTimes: 0,
          questList: [],
          refreshLeftTimes: 15,
          nextRefreshCost: 0,
          maxQuestLevel: 0,
          isCanAbandon: true,
          challengeScore: 0,
          finishKeyQuestList: [],
          isQuestFinish: false,
          openQuestTime: 0
        },
        techData: {
          mapId: data.mapId,
          level: 0,
          exp: 0,
          nextCollectTime: 0,
          skillPoint: 0,
          unlockSkillList: []
        },
        hasTakeFinishRewardCycle: 0,
        areaInfoList: [],
        areaEntityStateList: [],
        finishOnceEventList: []
    }, GetOpenworldMapRsp_CmdId.CMD_ID)

    session.send(rsp)
}