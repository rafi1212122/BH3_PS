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
                    "supplyImage": "event/GachaPic/6.5_UP_A_0406_truecolor2048",
                    "title": "4.6~4.14",
                    "content": "Focused Target kali ini:\\n\u26054 Weapon Keys of Oblivion\\n\u26054 Stigmata Raksha(T)(M)(B)",
                    "upWeaponList": [
                        {
                            "id": 21341,
                            "level": 10
                        }
                    ],
                    "upStigmataList": [
                        {
                            "id": 32761,
                            "level": 10
                        },
                        {
                            "id": 32771,
                            "level": 10
                        },
                        {
                            "id": 32781,
                            "level": 10
                        }
                    ],
                    "contentUrl": "",
                    "btnImagePath": "",
                    "isEnablePrompt": true,
                    "gachaId": 30112200,
                    "dataBeginTime": 1680724800,
                    "dataEndTime": 1681444799,
                    "displayExt": "{\"web_intro_url\":\"\",\"web_intro_img\":\"\",\"web_intro_text\":\"\",\"common_btn_link_type\":\"\",\"common_btn_link_params\":\"\",\"common_btn_link_url\":\"\",\"common_btn_img\":\"\",\"common_btn_text\":\"\",\"common_gacha_bg\":\"event/GachaPic/6.5_UP_A_0406BG_truecolor2048\",\"banner_btn_img\":\"event/Immediately/GachaPic/const_GiftBanner_Focus\",\"banner_btn_link_type\":\"115\",\"banner_btn_link_params\":\"16303616,16303617\",\"common_title_img\":\"event/Immediately/GachaPic/const_Focus_Title_truecolor2048\"}"
                },
                "hcoinGachaData": {
                    "ticketHcoinCost": 280,
                    "ticketMaterialId": 1102,
                    "wishWellData": {
                        "leftTimes": 1,
                        "setId": 112,
                        "materialId": 8004,
                        "materialNum": 2000,
                        "equipNeedNum": 2,
                        "equipList": [
                            {
                                "equipId": 32761,
                                "equipLevel": 10
                            },
                            {
                                "equipId": 32771,
                                "equipLevel": 10
                            },
                            {
                                "equipId": 32781,
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
                            21341,
                            32761,
                            32771,
                            32781
                        ],
                        "noProtectGachaTimes": 0
                    },
                    "displayMaxTimes": 50
                }
            }
        ],
    } as GetGachaDisplayRsp)
}