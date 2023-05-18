import { GachaProtectDisplayInfo_ProtectDisplayType, GachaType, GetGachaDisplayRsp, GetGachaDisplayRsp_CmdId, GetGachaDisplayRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetGachaDisplayRsp, {
        retcode: GetGachaDisplayRsp_Retcode.SUCC,
        isAll: true,
        type: GachaType.GACHA_TYPE_ERROR,
        gachaRandom: 101,
        gachaDisplayInfoList: [
            {
                "gachaType": GachaType.GACHA_CUSTOM_AVATAR,
                "commonData": {
                    "titleImage": "SpriteOutput/Gacha/TitleKakin5",
                    "supplyImage": "event/GachaPic/6.5_custom0512KV_truecolor2048",
                    "title": "5.12~5.18",
                    "content": "Target Expansion Crate: Battlesuit Rank-S <color=#fedf4c>Jade Knight</color> & Battlesuit Rank-A <color=#fedf4c>Snowy Sniper</color>.",
                    "upAvatarList": [
                        3101,
                        303,
                        302,
                        603,
                        114
                    ],
                    "contentUrl": "",
                    "btnImagePath": "",
                    "isEnablePrompt": true,
                    "gachaId": 30112100,
                    "dataBeginTime": 1683864000,
                    "dataEndTime": 1684353599*2,
                    "displayExt": "{\"web_intro_url\":\"https://honkaiimpact3.hoyoverse.com/strategy/character/detail/103076?game_biz=bh3_os&win_mode=fullscreen&fullscreen=1&sign_type=2&authkey_ver=1&auth_appid=e20220519gl\",\"web_intro_img\":\"\",\"web_intro_text\":\"OptionalGachaTipsLink_Desc\",\"common_btn_link_type\":\"17\",\"common_btn_link_params\":\"25\",\"common_btn_link_url\":\"\",\"common_btn_img\":\"SpriteOutput/Gacha/GaChaIcon/IconFragment\",\"common_btn_text\":\"Menu_Tab_Shoplist_2\",\"common_gacha_bg\":\"event/GachaPic/6.5_custom0512BG_truecolor2048\",\"banner_btn_img\":\"event/Immediately/GachaPic/const_GiftBanner_Custom\",\"banner_btn_link_type\":\"115\",\"banner_btn_link_params\":\"719909\",\"common_title_img\":\"event/Immediately/GachaPic/const_Custom_Title_truecolor2048\"}"
                },
                "customGachaData": {
                    "ticketHcoinCost": 280,
                    "ticketMaterialId": 1103,
                    "isEnableBaodi": true,
                    "gachaType": GachaType.GACHA_CUSTOM_AVATAR,
                    "gachaTimes": 0,
                    "displayMaxTimes": 100,
                    "noProtectGachaTimes": 9,
                    "displayVideoAvatar": 0,
                    "shiningType": 1,
                    "gachaPanelType": 0,
                    "displayExtraPara": "",
                    "exId": 1,
                    "exEnergy": 0,
                    "exGachaNum": 0,
                    "gachaExRewardInfo": {},
                    "protectDisplayInfo": {
                        "protectDisplayType": GachaProtectDisplayInfo_ProtectDisplayType.AVATAR_DISPLAY,
                        "displayKeyAvatar": 3101,
                        "noProtectGachaTimes": 9
                    }
                }
            }
        ]
    }, GetGachaDisplayRsp_CmdId.CMD_ID)

    session.send(rsp)
}