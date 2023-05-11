import dayjs from "dayjs";
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Config from "../../../utils/Config";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user, scoin } = session.player

    const rsp = Packet.encode(GetMainDataRsp, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        nickname: user.nick,
        level: user.level,
        exp: user.exp,
        hcoin: user.hcoin,
        scoin,
        stamina: user.stamina,
        staminaRecoverLeftTime: 0,
        staminaRecoverConfigTime: 360,
        equipmentSizeLimit: 1000,
        selfDesc: user.selfDesc,
        payHcoin: 0,
        freeHcoin: user.hcoin,
        assistantAvatarId: user.assistantAvatarId,
        isAllowCostSeniorEquipOnCurDevice: false,
        birthday: 0,
        monthRechargePrice: 0,
        waitDelHcoin: 0,
        onMedalId: 0,
        todayRechargePrice: 0,
        useFrameId: 200001,
        isAll: true,
        mcoin: 0,
        openPanelActivityList: [
            2
        ],
        videoPopupList: [],
        onPhonePendantId: 350005,
        nextEvaluateTime: 0,
        chatworldActivityInfo: {
            treasureScheduleId: 0,
            isHasNpcRedEnvelope: false
        },
        levelLockId: 1,
        warshipAvatar: {
            warshipFirstAvatarId: user.warshipFirstAvatarId,
            warshipSecondAvatarId: 0
        },
        customHeadId: 161001,
        totalLoginDays: 1,
        registerTime: dayjs(user.get('createdAt')).unix(),
        warshipTheme: {
            warshipId: user.warshipId,
            componentList: [],
            bgmPlayMode: 0,
            isWeatherFixed: false,
            weatherIdx: 0
        },
        waitDelMaterialList: [],
        typeList: [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            14,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            35,
            36,
            37,
            38,
            39
        ]
    }, GetMainDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}