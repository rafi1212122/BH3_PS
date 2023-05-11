import dayjs from "dayjs";
import { GetNewOpenworldRsp, GetNewOpenworldRsp_CmdId, GetNewOpenworldRsp_Retcode, OpenworldDataType } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetNewOpenworldRsp, {
        retcode: GetNewOpenworldRsp_Retcode.SUCC,
        dataType: OpenworldDataType.OPENWORLD_DATA_ALL,
        mapList: [
            {
                mapId: 1,
                status: 3,
                statList: [],
                cycle: 0,
                questLevel: 1,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 2,
                status: 3,
                statList: [],
                cycle: 0,
                questLevel: 1,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 401,
                status: 3,
                statList: [],
                cycle: 0,
                questLevel: 1,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 601,
                status: 3,
                statList: [],
                cycle: 0,
                questLevel: 1,
                hasTakeFinishRewardCycle: 0
            }
        ],
        nextRefreshTime: dayjs().add(1, 'week').startOf('week').add(4, 'hour').unix(),
        globalRandomSeed: 952403967,
        closeTime: dayjs().add(1, 'week').startOf('week').add(3, 'hour').unix(),
        cookList: [],
        questThemeIndex: 8353,
        tech: [
            {
                mapId: 1,
                level: 0,
                exp: 0,
                nextCollectTime: 0,
                skillPoint: 0,
                unlockSkillList: []
            },
            {
                mapId: 2,
                level: 0,
                exp: 0,
                nextCollectTime: 0,
                skillPoint: 0,
                unlockSkillList: []
            },
            {
                mapId: 401,
                level: 0,
                exp: 0,
                nextCollectTime: 0,
                skillPoint: 0,
                unlockSkillList: []
            },
            {
                mapId: 601,
                level: 0,
                exp: 0,
                nextCollectTime: 0,
                skillPoint: 0,
                unlockSkillList: []
            }
        ],
        mechaPortList: [],
        questLevel: 1,
        questStar: 0,
        maxQuestLevel: 1
    }, GetNewOpenworldRsp_CmdId.CMD_ID)

    session.send(rsp)
}