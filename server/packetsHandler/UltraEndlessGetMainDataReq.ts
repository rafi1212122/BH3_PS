import net from "net"
import { UltraEndlessGetMainDataReq, UltraEndlessGetMainDataRsp, UltraEndlessGetMainDataRsp_CmdId, UltraEndlessGetMainDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"

export default (socket: net.Socket, packet: UltraEndlessGetMainDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    Packet.getInstance().serializeAndSend(socket, UltraEndlessGetMainDataRsp_CmdId.CMD_ID, {
        retcode: UltraEndlessGetMainDataRsp_Retcode.SUCC,
        scheduleId: 3204,
        cupNum: 1550,
        groupLevel: 8,
        mainData: {
            scheduleId: 3204,
            effectTime: 1681655400,
            beginTime: 1681714800,
            endTime: 1781912800,
            closeTime: 1781914600,
            lastScheduleId: 3203,
            siteList: [
                {
                    siteId: 145344,
                    maxScoreCostTime: 0
                },
                {
                    siteId: 145345,
                    maxScoreCostTime: 0
                },
                {
                    siteId: 145346,
                    maxScoreCostTime: 0
                },
                {
                    siteId: 145347,
                    maxScoreCostTime: 0
                },
            ],
            lastSettleTopRankScheduleId: 3202,
            curSeasonId: 112
        },
        lastSettleInfo: {
            scheduleId: 3203,
            groupLevel: 4,
            maxStageScore: 21694,
            groupMemberNum: 20,
            rank: 1,
            cupNumBefore: 525,
            cupNumAfterScheduleSettle: 675,
            cupNumAfterSeasonSettle: 1125,
            cupNumBeforeSeasonSettle: 1125,
            cupNum: 675,
            mmrScore: 1185,
            bufferCupBeforeScheduleSettle: 0,
            bufferCup: 0
        },
        topGroupLevel: 9,
        dynamicHardLevel: 420,
        endlessPlayerList: [
            {
                cupNum: 1550,
                groupLevel: 8,
                lineupInfo: {},
                maxStageScore: 0,
                scoreUpdateTime: 0,
                uid: user?.uid
            }
        ],
        briefDataList: [
            {
                "uid": user?.uid,
                "nickname": user?.name,
                "level": 88,
                "avatarId": user?.assistantAvatarId,
                "avatarStar": 1,
                "avatarCombat": 0,
                "avatarLevel": 80,
                "lastLoginTime": 1681631944,
                "dressId": 59713,
                "armadaId": 0,
                "armadaName": "",
                "frameId": 200006,
                "mpLevel": 39,
                "customHeadId": 161078,
                "onMedal": {
                    "id": 101096,
                },
                "isAllowVisit": true,
                "visitAvatar": user?.assistantAvatarId,
                "beLikedNum": 1,
                "showHouse": 101,
                "comfortValue": 652,
                "houseLevel": 18,
                "houseName": "",
                "isGoback": true,
                "avatarSubStar": 0,
                "lastLogoutTime": 1681632986,
                "onlineStatus": 3,
                "isLogoff": false
            },
        ]
    } as UltraEndlessGetMainDataRsp)
}