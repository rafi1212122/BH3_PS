import dayjs from "dayjs"
import net from "net"
import { GetConfigReq, GetConfigRsp, GetConfigRsp_CmdId, GetConfigRsp_Retcode } from "../../BengHuai"
import config from "../../config"
import getTs from "../../util/getTs"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetConfigReq) => {
    Packet.getInstance().serializeAndSend(socket, GetConfigRsp_CmdId.CMD_ID, {
        "retcode": GetConfigRsp_Retcode.SUCC,
        "staminaRecoverConfigTime": 360,
        "avatarReviveHcoinCost": 60,
        "sameTypePowerUpRate": 120,
        "dayTimeOffset": 14400,
        "serverCurTime": parseInt(getTs()),
        "powerUpScoinCostRate": 50,
        "maxFriendNum": 148,
        "avatarMaxAddGoodfeel": 1000,
        "disjoinEquipmentBackExpPercent": 25,
        "gachaTicketList": [
            {
                "materialId": 916,
                "hcoinCost": 10
            },
            {
                "materialId": 1102,
                "hcoinCost": 280
            },
            {
                "materialId": 1103,
                "hcoinCost": 280
            },
            {
                "materialId": 1104,
                "hcoinCost": 280
            },
            {
                "materialId": 1106,
                "hcoinCost": 60
            },
            {
                "materialId": 1108,
                "hcoinCost": 280
            },
            {
                "materialId": 1109,
                "hcoinCost": 150
            },
            {
                "materialId": 1110,
                "hcoinCost": 200
            },
            {
                "materialId": 1111,
                "hcoinCost": 200
            },
            {
                "materialId": 1112,
                "hcoinCost": 120
            },
            {
                "materialId": 1115,
                "hcoinCost": 280
            },
            {
                "materialId": 7335,
                "hcoinCost": 100
            },
            {
                "materialId": 7454,
                "hcoinCost": 10
            },
            {
                "materialId": 7848,
                "hcoinCost": 10
            },
            {
                "materialId": 114045,
                "hcoinCost": 200
            },
            {
                "materialId": 114076,
                "hcoinCost": 8
            },
            {
                "materialId": 114214,
                "hcoinCost": 10
            },
            {
                "materialId": 114312,
                "hcoinCost": 10
            },
            {
                "materialId": 114328,
                "hcoinCost": 8
            },
            {
                "materialId": 114663,
                "hcoinCost": 10
            },
            {
                "materialId": 114667,
                "hcoinCost": 8
            },
            {
                "materialId": 114689,
                "hcoinCost": 10
            },
            {
                "materialId": 115108,
                "hcoinCost": 10
            },
            {
                "materialId": 115113,
                "hcoinCost": 10
            },
            {
                "materialId": 115130,
                "hcoinCost": 10
            },
            {
                "materialId": 115167,
                "hcoinCost": 8
            },
            {
                "materialId": 115170,
                "hcoinCost": 8
            },
            {
                "materialId": 116124,
                "hcoinCost": 10
            },
            {
                "materialId": 119108,
                "hcoinCost": 8
            },
            {
                "materialId": 121033,
                "hcoinCost": 10
            },
            {
                "materialId": 121041,
                "hcoinCost": 10
            },
            {
                "materialId": 121042,
                "hcoinCost": 10
            },
            {
                "materialId": 121294,
                "hcoinCost": 10
            },
            {
                "materialId": 121298,
                "hcoinCost": 10
            },
            {
                "materialId": 125202,
                "hcoinCost": 10
            },
            {
                "materialId": 1061660,
                "hcoinCost": 100
            }
        ],
        "regionName": config.regionName,
        "minInviteLevel": 26,
        "discountScheduleConfigList": [
            {
                "type": 2,
                "discount": 80,
                "beginTime": 1673467200,
                "endTime": 1675396800,
                "paraIntList": [
                    106,
                    206
                ]
            },
            {
                "type": 4,
                "discount": 600,
                "beginTime": 1673467200,
                "endTime": 1675396800
            }
        ],
        "islandEventRefreshInterval": 120,
        "spaceshipBeginTime": 1599184800,
        "spaceshipEndTime": 1599444000,
        "spaceshipId": 2,
        "scoinLimit": 999999999,
        "friendsPointLimit": 500000000,
        "weekDayActivityCoinItemId": 7034,
        "islandVisitMaxHelpNum": 5,
        "costSeniorEquipAfterCancelProtectMinTimeDiff": 86400,
        "rogueStageCostItemId": 9008,
        "rogueStageMaxProgress": 999,
        "armadaDiscoveryRewardList": [
            {
                "discovery": 5000,
                "rewardId": 920001
            },
            {
                "discovery": 8000,
                "rewardId": 920002
            },
            {
                "discovery": 13000,
                "rewardId": 920003
            },
            {
                "discovery": 20000,
                "rewardId": 920004
            },
            {
                "discovery": 30000,
                "rewardId": 920005
            }
        ],
        "rogueStageOpenLevel": 20,
        "armadaBeginTime": 1496030400,
        "armadaEndTime": 1501876800,
        "armadaCustomContent": "ArmadaActivityBtn_Dec",
        "stigmataRuneOpenLevel": 1,
        "stigmataTitleOpenLevel": 60,
        "stigmataDisjoinTitleBackExpPercent": 50,
        "stigmataPromoteMaxTimes": 10,
        "stigmataRuneCombatRatio": 0,
        "stigmataDisjoinBackExpPercent": 25,
        "stigmataRefineValueBackPercent": 1,
        "stigmataTitleExpMaterialList": [
            8301,
            8302,
            8303,
            8304
        ],
        "scoinConvertPerExp": 54,
        "mpResetSkillHcoinCost": 30,
        "mpMemberMaxTimesForAllAct": 50,
        "mpMemberExhaustedDropRatio": 25,
        "friendBondLevelConfigList": [
            {
                "level": 0,
                "minBond": 0,
                "assistCdReduceRate": 0,
                "inviteAddFriendsPoint": 0,
                "extraAddMpExpRate": 0,
                "extraMpAddFriendsPoint": 0
            },
            {
                "level": 1,
                "minBond": 333,
                "assistCdReduceRate": 20,
                "inviteAddFriendsPoint": 3,
                "extraAddMpExpRate": 5,
                "extraMpAddFriendsPoint": 3
            },
            {
                "level": 2,
                "minBond": 666,
                "assistCdReduceRate": 40,
                "inviteAddFriendsPoint": 7,
                "extraAddMpExpRate": 10,
                "extraMpAddFriendsPoint": 7
            },
            {
                "level": 3,
                "minBond": 999,
                "assistCdReduceRate": 60,
                "inviteAddFriendsPoint": 10,
                "extraAddMpExpRate": 15,
                "extraMpAddFriendsPoint": 10
            }
        ],
        "mpPunishMpExpReduceRate": 75,
        "friendAssistantAddBond": 5,
        "armadaManageMailLength": 100,
        "armadaContactLength": 20,
        "armadaManageMailCd": 3600,
        "armadaBulletinLength": 140,
        "trialAvatarPlayerMinLevel": 10,
        "disjoinEquipmentMaxBatchNum": 50,
        "equipDisjointUnlockLevel": 25,
        "armadaBossStageOpenLevel": 30,
        "antiCheatStageCheckConfig": {
            "checkStageIdList": [
                146001,
                146002,
                146003,
                146004,
                146005,
                146006,
                146007,
                146008,
                146009,
                146010,
                146011,
                146012,
                146013,
                146014,
                146015,
                146016,
                146017,
                146018,
                146019,
                146020,
                146021,
                146022,
                146023,
                146024,
                146025,
                146026,
                146027,
                146028,
                146029,
                146030,
                146031,
                146032,
                146033,
                146034,
                146035,
                146036,
                146037,
                146038,
                146039,
                146040,
                146041,
                146042,
                146043,
                146044,
                146045,
                146046,
                146047,
                146048,
                146049,
                146050,
                146051,
                146052,
                146053,
                146054,
                146055,
                146056,
                146057,
                146058,
                146059,
                146060,
                146061,
                146062,
                146063,
                146064,
                146065,
                146066,
                146067,
                146068,
                146069,
                146070,
                146071,
                146072,
                146073,
                146074,
                146075,
                146076,
                146077,
                146078,
                146079,
                146080,
                146081,
                146082,
                146083,
                146084,
                146085,
                146086,
                146087,
                146088,
                146089,
                146090,
                146091,
                146092,
                146093,
                146094,
                146095,
                146096,
                146097,
                146098,
                146099,
                146100,
                146201,
                146202,
                146203,
                146204,
                153001,
                153002,
                153003,
                153004,
                153005,
                153006,
                153007,
                153008,
                153009,
                153010,
                153011,
                153012,
                153013,
                153014,
                153015,
                153016,
                153017,
                153018,
                153019,
                153020,
                153021,
                153022,
                153023,
                153024,
                153025,
                153026,
                153027,
                153028,
                153029,
                153030,
                153031,
                153501,
                153502,
                153503,
                153504,
                153505,
                153506,
                153507,
                153508,
                153509,
                153510,
                153511,
                153512,
                153513,
                153514,
                153515,
                153516,
                153517,
                153518,
                900430,
                900501,
                155081,
                155101,
                155111,
                175620,
                175621,
                175622,
                175623,
                175624,
                175625,
                175626,
                175627,
                175628,
                175629,
                175630,
                175631,
                175632,
                175633,
                175634,
                175635,
                175636,
                175637,
                175638,
                175639,
                175640,
                175641,
                175642,
                175643,
                175644,
                175645,
                175646,
                175647,
                175648,
                175649,
                175650,
                175651,
                175652,
                175653,
                175654,
                175655,
                10302204,
                10302208,
                10302212,
                10302216,
                10302221,
                10302222,
                10302223,
                10302224,
                10302225,
                10302226,
                10302227,
                10400104,
                10400204,
                10400304,
                151301,
                151302,
                151303,
                151304,
                151305,
                151320,
                151321,
                151322,
                151323,
                151324,
                151325,
                151326,
                151327,
                151328,
                151329,
                151330,
                151331,
                151332,
                151333,
                151334,
                151335,
                151336,
                151337,
                151338,
                151339,
                151340
            ],
            "checkStageTypeList": [
                4,
                15,
                20,
                21,
                24,
                25,
                32,
                10,
                11,
                35,
                33,
                37,
                36
            ]
        },
        "isCanGalTouch": true,
        "isResistanceOpen": true,
        "nextDayBeginTime": Math.round(dayjs().add(1, 'day').startOf("day").add(3, 'hour').toDate().getTime()/1000)
    } as GetConfigRsp)
}