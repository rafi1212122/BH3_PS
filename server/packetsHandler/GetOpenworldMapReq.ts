import net from "net"
import { GetOpenworldMapReq, GetOpenworldMapRsp, GetOpenworldMapRsp_CmdId, GetOpenworldMapRsp_Retcode, OpenworldQuestStatus } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { getSpawn } from "../../mongodb/Model/OpenworldSpawn"

export default async (socket: net.Socket, packet: GetOpenworldMapReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    Packet.getInstance().serializeAndSend(socket, GetOpenworldMapRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldMapRsp_Retcode.SUCC,
        mapId: packet.mapId,
        cycle: 4,
        eventRandomSeed: 761201006,
        spawnPoint: user?(await getSpawn(user.uid, packet.mapId))?.point:"AreaC_Born:101,AreaA_P (1):102",
        overViewList: [
            {
                missionId: 55001,
                progress: 424
            },
            {
                missionId: 55002,
                progress: 347
            },
            {
                missionId: 55008,
                progress: 30
            },
            {
                missionId: 55009,
                progress: 573
            }
        ],
        statList: [
            {
                id: 1,
                maxNum: 15,
                finishNum: 0
            },
            {
                id: 3,
                maxNum: 12,
                finishNum: 0
            },
            {
                id: 4,
                maxNum: 12,
                finishNum: 0
            }
        ],
        status: 0,
        questData: {
            isOpen: false,
            dayOpenTimes: 0,
            refreshLeftTimes: 0,
            nextRefreshCost: 5,
            keyQuest: {
                id: 3001,
                status: OpenworldQuestStatus.OPENWORLD_QUEST_CLOSE,
                debuffId: 303,
                position: 0,
                progress: 0,
                rarityRewardId: 0,
                questActivityId: 0,
                specialTimeoutSec: 0
            },
            isCanAbandon: true,
            challengeScore: 0,
            finishKeyQuestList: [
                3001
            ],
            isQuestFinish: false,
            openQuestTime: 1648725668
        },
        techData: {
            mapId: 1,
            level: 11,
            exp: 25430,
            nextCollectTime: 82800,
            skillPoint: 0,
            unlockSkillList: [
                1,
                2,
                10,
                11,
                8,
                3
            ]
        },
        activityData: {
            activityId: 0,
            activityExp: 0,
            activityLevel: 0,
            activityRewardTakenLevelList: [0],
            phaseId: 0,
            activityTreasureTakenList: [0]
        }
    } as GetOpenworldMapRsp)
}