import dayjs from "dayjs";
import { GetConfigRsp, GetConfigRsp_CmdId, GetConfigRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import { unixInSeconds } from "../../../utils";
import Config from "../../../utils/Config";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetConfigRsp, {
        retcode: GetConfigRsp_Retcode.SUCC,"staminaRecoverConfigTime": 360,
        "avatarReviveHcoinCost": 60,
        "sameTypePowerUpRate": 120,
        "dayTimeOffset": 14400,
        "serverCurTime": unixInSeconds,
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
                "materialId": 115183,
                "hcoinCost": 8
            },
            {
                "materialId": 116124,
                "hcoinCost": 10
            },
            {
                "materialId": 116762,
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
        "regionName": Config.GAMESERVER.REGION_NAME,
        "minInviteLevel": 26,
        "islandEventRefreshInterval": 120,
        "spaceshipBeginTime": 1599184800,
        "spaceshipEndTime": 1599444000,
        "spaceshipId": 2,
        "scoinLimit": 999999999,
        "friendsPointLimit": 500000000,
        "weekDayActivityCoinItemId": 7034,
        "islandVisitMaxHelpNum": 5,
        "costSeniorEquipAfterCancelProtectMinTimeDiff": 86400,
        "bulletinActivityList": [
            {
                "activityId": 4378,
                "activityType": 2,
                "beginTime": 1574842500,
                "endTime": 2079764100,
                "bulletinId": 0,
                "typeParamList": [
                    24
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 15,
                "maxPlayerLevel": 99,
                "titleName": "DLC_Boxgacha_Title",
                "titleImage": "SpriteOutput/ShopTabIcons/IconShopGacha",
                "imagePath": "event/Immediately/ActivityPage/3.5SPhuntinggacha_banner_truecolor",
                "linkButton": "",
                "description": "3.5SPhuntinggacha_Des",
                "weight": 334,
                "backgroundPath": "event/Immediately/ActivityPage/3.5SPhunting_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/3.5SPhuntinggacha_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5167,
                "activityType": 46,
                "beginTime": 1641866400,
                "endTime": 2274379199,
                "bulletinId": 0,
                "typeParamStr": "0",
                "minPlayerLevel": 80,
                "maxPlayerLevel": 99,
                "titleName": "5.6TUPO_title",
                "titleImage": "SpriteOutput/BP/5.6_TuPo_Tab",
                "imagePath": "",
                "linkButton": "",
                "description": "5.6TUPO_des",
                "weight": 700,
                "backgroundPath": "",
                "textImagePath": "",
                "unlockParamStr": ""
            },
            {
                "activityId": 5175,
                "activityType": 2,
                "beginTime": 1642032000,
                "endTime": 2053540799,
                "bulletinId": 0,
                "typeParamList": [
                    35
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 25,
                "maxPlayerLevel": 99,
                "titleName": "5.4dlcgacha_title",
                "titleImage": "SpriteOutput/ShopTabIcons/IconShopGacha",
                "imagePath": "event/Immediately/ActivityPage/5.4_DLC2gacha_banner_truecolor",
                "linkButton": "",
                "description": "5.4dlcgacha_Des",
                "weight": 898,
                "backgroundPath": "event/Immediately/ActivityPage/5.4_DLC2gacha_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/5.4_DLC2gacha_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5506,
                "activityType": 4,
                "beginTime": 1682906400,
                "endTime": 1684353599,
                "bulletinId": 0,
                "typeParamList": [
                    676489,
                    676490,
                    676491,
                    676492,
                    676493,
                    676494,
                    676495,
                    676496,
                    676497
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_QcandyActivity_Title",
                "titleImage": "event/Immediately/ActivityPage/6.5_QcandyActivity_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_Qcnady_banner_truecolor",
                "linkButton": "<type=\"81|2200\" text=\"GO\"/>",
                "description": "6.5_Qcnady_Des",
                "weight": 1900,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_Qcnady_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_Qcnady_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5507,
                "activityType": 3,
                "beginTime": 1682906400,
                "endTime": 1684958399,
                "bulletinId": 0,
                "typeParamList": [
                    70
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_QcandyShop_Title",
                "titleImage": "event/Immediately/ActivityPage/6.5_QcnadyShop_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_QcnadyShop_banner_truecolor",
                "linkButton": "<type=\"81|2200\" text=\"GO\"/>",
                "description": "6.5_QcnadyShop_Des",
                "weight": 1899,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_QcnadyShop_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_QcnadyShop_title_truecolor",
                "currencyList": [
                    126600
                ],
                "unlockParamStr": ""
            },
            {
                "activityId": 5513,
                "activityType": 4,
                "beginTime": 1680724800,
                "endTime": 1684353599,
                "bulletinId": 0,
                "typeParamList": [
                    676515,
                    676516,
                    676517,
                    676535,
                    676536,
                    676518,
                    676519,
                    676520,
                    676521,
                    676522,
                    676523,
                    676524,
                    676525,
                    676526,
                    676527,
                    676528,
                    676529,
                    676530,
                    676531,
                    676532,
                    676533,
                    676534
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 25,
                "maxPlayerLevel": 99,
                "titleName": "6.5_ElfGiftActivity_Title",
                "titleImage": "event/Immediately/ActivityPage/6.5_ElfGiftActivity_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_ElfGift_banner_truecolor",
                "linkButton": "<type=\"64|5523\" text=\"GO\"/>",
                "description": "6.5_ElfGift_Des",
                "weight": 1500,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_ElfGift_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_ElfGift_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5515,
                "activityType": 4,
                "beginTime": 1680724800,
                "endTime": 1684353599,
                "bulletinId": 0,
                "typeParamList": [
                    676537,
                    676538,
                    676539,
                    676542,
                    676543,
                    676544,
                    676545,
                    676546,
                    676547,
                    676548,
                    676549,
                    676550,
                    676551,
                    676552,
                    676553,
                    676554,
                    676555,
                    676556,
                    676557,
                    676558,
                    676559,
                    676560,
                    676561,
                    676562,
                    676563,
                    676564,
                    676565,
                    676566,
                    676567,
                    676568,
                    676540,
                    676541
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_SusannaTrial_Title",
                "titleImage": "event/Immediately/ActivityPage/6.5_SusannaTrial_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_SusannaTrial_banner_truecolor",
                "linkButton": "<type=\"81|2100\" text=\"GO\"/>",
                "description": "6.5_SusannaTrial_Des",
                "weight": 1600,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_SusannaTrial_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_SusannaTrial_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5516,
                "activityType": 3,
                "beginTime": 1680724800,
                "endTime": 1684958399,
                "bulletinId": 0,
                "typeParamList": [
                    65
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_SusannaTrialShop_Title",
                "titleImage": "event/Immediately/ActivityPage/6.5_SusannaTrial_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_SusannaTrialShop_banner_truecolor",
                "linkButton": "<type=\"81|2100\" text=\"GO\"/>",
                "description": "6.5_SusannaTrialShop_Des",
                "weight": 1599,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_SusannaTrialShop_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_SusannaTrialShop_title_truecolor",
                "currencyList": [
                    126501
                ],
                "unlockParamStr": ""
            },
            {
                "activityId": 5519,
                "activityType": 4,
                "beginTime": 1683165600,
                "endTime": 1684353599,
                "bulletinId": 0,
                "typeParamList": [
                    676573,
                    676574,
                    676575,
                    676576,
                    676577,
                    676578,
                    676579,
                    676580,
                    676581,
                    676582,
                    676583,
                    676584,
                    676585,
                    676586,
                    676587,
                    676588
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 50,
                "maxPlayerLevel": 99,
                "titleName": "6.3_WaveRush_title",
                "titleImage": "event/Immediately/ActivityPage/6.5_WaveRush_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_WaveRush_banner_truecolor",
                "linkButton": "<type=\"142|0\" text=\"GO\"/>",
                "description": "6.3_WaveRush_Des",
                "weight": 1800,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_WaveRush_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_WaveRush_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5523,
                "activityType": 3,
                "beginTime": 1680724800,
                "endTime": 1684958399,
                "bulletinId": 0,
                "typeParamList": [
                    308
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 25,
                "maxPlayerLevel": 99,
                "titleName": "6.5_ElfGiftShop_Title",
                "titleImage": "event/Immediately/ActivityPage/6.5_ElfGiftShop_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_ElfGiftShop_banner_truecolor",
                "linkButton": "<type=\"64|5513\" text=\"GO\"/>",
                "description": "6.5_ElfGiftShop_Des",
                "weight": 1499,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_ElfGiftShop_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_ElfGiftShop_title_truecolor",
                "currencyList": [
                    126704
                ],
                "unlockParamStr": ""
            },
            {
                "activityId": 5527,
                "activityType": 4,
                "beginTime": 1681956000,
                "endTime": 1684353599,
                "bulletinId": 0,
                "typeParamList": [
                    676672,
                    676673,
                    676674,
                    676675,
                    676676,
                    676677,
                    676678,
                    676679,
                    676680,
                    676681,
                    676682,
                    676683,
                    676684
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_MainOW_title",
                "titleImage": "event/Immediately/ActivityPage/6.5_MainStage_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_MainStage_banner_truecolor",
                "linkButton": "<type=\"94|36\" text=\"GO\"/>",
                "description": "6.5_MainStage_Des",
                "weight": 1700,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_MainStage_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_MainStage_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5528,
                "activityType": 3,
                "beginTime": 1681956000,
                "endTime": 1684958399,
                "bulletinId": 0,
                "typeParamList": [
                    64
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_MainOWshop_title",
                "titleImage": "event/Immediately/ActivityPage/6.5_MainStageshop_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_MainStageshop_banner_truecolor",
                "linkButton": "<type=\"94|36\" text=\"GO\"/>",
                "description": "6.5_MainStageshop_Des",
                "weight": 1699,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_MainStageshop_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_MainStageshop_title_truecolor",
                "currencyList": [
                    122761
                ],
                "unlockParamStr": ""
            },
            {
                "activityId": 5531,
                "activityType": 4,
                "beginTime": 1682906400,
                "endTime": 1684353599,
                "bulletinId": 0,
                "typeParamList": [
                    676671
                ],
                "typeParamStr": "1",
                "minPlayerLevel": 30,
                "maxPlayerLevel": 99,
                "titleName": "6.5_6.6_MainOW1_title",
                "titleImage": "event/Immediately/ActivityPage/6.5_6.6_MainStage3_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_6.6_MainStage3_banner_truecolor",
                "linkButton": "<type=\"94|36\" text=\"GO\"/>",
                "description": "6.5_6.6_MainStage1_Des",
                "weight": 1701,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_6.6_MainStage3_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_6.6_MainStage3_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 5533,
                "activityType": 3,
                "beginTime": 1681070400,
                "endTime": 1684699199,
                "bulletinId": 0,
                "typeParamList": [
                    57
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 10,
                "maxPlayerLevel": 99,
                "titleName": "5.6BPShop_Title",
                "titleImage": "event/Immediately/BP/const_ShopTab04_truecolor",
                "imagePath": "event/Immediately/BP/Shop/6.5_6.6_BPShopBanner_banner_truecolor",
                "linkButton": "",
                "description": "",
                "weight": 1226,
                "backgroundPath": "event/Immediately/BP/Shop/6.5_6.6_BPShopBanner_bg_truecolor",
                "textImagePath": "SpriteOutput/BP/BP_Banner_Touming",
                "currencyList": [
                    973971
                ],
                "unlockParamStr": ""
            },
            {
                "activityId": 5564,
                "activityType": 4,
                "beginTime": 1683777600,
                "endTime": 1684699200,
                "bulletinId": 0,
                "typeParamList": [
                    86294
                ],
                "typeParamStr": "5",
                "minPlayerLevel": 20,
                "maxPlayerLevel": 99,
                "titleName": "6.5_6.6_ShowPage_title",
                "titleImage": "event/Immediately/ActivityPage/6.5_6.6_ShowPage_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_6.6_ShowPage_banner_truecolor",
                "linkButton": "<type=\"webview\" text=\"GO\" href=\"https://act.hoyoverse.com/puzzle/bh3/e20230511preview01_798/index.html?game_biz=bh3_os&sign_type=2&authkey_ver=1&auth_appid=e20230511preview01&win_mode=fullscreen\"/>",
                "description": "6.5_6.6_ShowPage_Des",
                "weight": 900,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_6.6_ShowPage_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_6.6_ShowPage_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 16295,
                "activityType": 4,
                "beginTime": 1674014400,
                "endTime": 1705521599,
                "bulletinId": 0,
                "typeParamList": [
                    1063835
                ],
                "typeParamStr": "1",
                "minPlayerLevel": 15,
                "maxPlayerLevel": 99,
                "titleName": "6.3_MediaJW_title",
                "titleImage": "event/Immediately/ActivityPage/const_MediaJW_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/const_MediaJW_banner_truecolor",
                "linkButton": "<type=\"browser\" text=\"GO\" href=\"https://hoyo.link/01XoBBAd\"/>",
                "description": "6.3_MediaJW_Des",
                "weight": 300,
                "backgroundPath": "event/Immediately/ActivityPage/const_MediaJW_bg_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/const_MediaJW_title_truecolor",
                "unlockParamStr": ""
            },
            {
                "activityId": 16351,
                "activityType": 41,
                "beginTime": 1680746400,
                "endTime": 1684378800,
                "bulletinId": 0,
                "typeParamList": [
                    1063881,
                    1063882,
                    1063883,
                    1063884,
                    1063885,
                    1063886,
                    1063887
                ],
                "typeParamStr": "0",
                "minPlayerLevel": 15,
                "maxPlayerLevel": 99,
                "titleName": "5.1Recharge_title",
                "titleImage": "event/Immediately/ActivityPage/6.5_Recharge_tab_truecolor",
                "imagePath": "event/Immediately/ActivityPage/6.5_recharge_banner_truecolor",
                "linkButton": "",
                "description": "5.0Recharge_Des",
                "weight": 1600,
                "backgroundPath": "event/Immediately/ActivityPage/6.5_Recharge_BG_truecolor",
                "textImagePath": "event/Immediately/ActivityPage/6.5_Recharge_title_truecolor",
                "currencyList": [
                    3,
                    6
                ],
                "unlockParamStr": ""
            }
        ],
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
                146205,
                146206,
                146207,
                146208,
                146209,
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
                10302404,
                10302408,
                10302412,
                10302416,
                10302421,
                10302422,
                10302423,
                10302424,
                10302425,
                10302426,
                10302427,
                10600101,
                10600201
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
        "nextDayBeginTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix()
    }, GetConfigRsp_CmdId.CMD_ID)

    session.send(rsp)
}