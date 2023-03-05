import net from "net"
import { GachaProtectDisplayInfo_ProtectDisplayType, GachaType, GetGachaDisplayReq, GetGachaDisplayRsp, GetGachaDisplayRsp_CmdId, GetGachaDisplayRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetGachaDisplayReq) => {
    Packet.getInstance().serializeAndSend(socket, GetGachaDisplayRsp_CmdId.CMD_ID, {
        retcode: GetGachaDisplayRsp_Retcode.SUCC,
        isAll: true,
        type: GachaType.GACHA_TYPE_ERROR,
        gachaRandom: 1742686523,
        gachaDisplayInfoList: [
            {
                "gachaType": GachaType.GACHA_SPECIAL_HCOIN,
                "commonData": {
                    "titleImage": "SpriteOutput/Gacha/TitleKakin3",
                    "supplyImage": "event/GachaPic/6.4_UP_A_0216_truecolor2048",
                    "title": "2.16~3.17",
                    "content": "Focused Target kali ini:\\n\u26054 Weapon Key of Anonymity\\n\u26054 Stigmata Kiana Kaslana(T)(M)(B)",
                    "upWeaponList": [
                        {
                            "id": 21731,
                            "level": 10
                        }
                    ],
                    "upStigmataList": [
                        {
                            "id": 34841,
                            "level": 10
                        },
                        {
                            "id": 34851,
                            "level": 10
                        },
                        {
                            "id": 34861,
                            "level": 10
                        }
                    ],
                    "contentUrl": "",
                    "btnImagePath": "",
                    "isEnablePrompt": true,
                    "gachaId": 30103800,
                    "dataBeginTime": 1676491200,
                    "dataEndTime": 1679025599,
                    "displayExt": "{\"web_intro_url\":\"\",\"web_intro_img\":\"\",\"web_intro_text\":\"\",\"common_btn_link_type\":\"\",\"common_btn_link_params\":\"\",\"common_btn_link_url\":\"\",\"common_btn_img\":\"\",\"common_btn_text\":\"\",\"common_gacha_bg\":\"event/GachaPic/6.4_UP_A_0216BG_truecolor2048\",\"banner_btn_img\":\"event/Immediately/GachaPic/6.4_W1FSA_Pack\",\"banner_btn_link_type\":\"115\",\"banner_btn_link_params\":\"16305614,16305615,16305616,16305617,16305618,16303616,16303617\",\"common_title_img\":\"event/Immediately/GachaPic/const_Focus_Title_truecolor2048\"}"
                },
                "hcoinGachaData": {
                    "ticketHcoinCost": 280,
                    "ticketMaterialId": 1102,
                    "wishWellData": {
                        "leftTimes": 1,
                        "setId": 158,
                        "materialId": 8004,
                        "materialNum": 2000,
                        "equipNeedNum": 2,
                        "equipList": [
                            {
                                "equipId": 34841,
                                "equipLevel": 10
                            },
                            {
                                "equipId": 34851,
                                "equipLevel": 10
                            },
                            {
                                "equipId": 34861,
                                "equipLevel": 10
                            }
                        ],
                        "maxWishTimes": 1
                    },
                    "shiningType": 0,
                    "gachaPanelType": 0,
                    "protectDisplayInfo": {
                        "protectDisplayType": GachaProtectDisplayInfo_ProtectDisplayType.EQUIP_DISPLAY,
                        "displayKeyItemList": [
                            21731,
                            34841,
                            34851,
                            34861
                        ],
                        "dropedUpItemList": [
                            34851,
                            34861
                        ],
                        "noProtectGachaTimes": 25
                    },
                    "displayMaxTimes": 50
                }
            }
        ],
    } as GetGachaDisplayRsp)
}