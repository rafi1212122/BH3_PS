import net from "net"
import { GetMainDataReq, GetMainDataReq_DataType, GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMainDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
            retcode: GetMainDataRsp_Retcode['FAIL'],
        } as GetMainDataRsp)
    }
    
    let rsp: Partial<GetMainDataRsp> = {
        retcode: GetMainDataRsp_Retcode['SUCC'],
    }

    if(packet.typeList.includes(GetMainDataReq_DataType.ALL)){
        return Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
            retcode: GetMainDataRsp_Retcode['SUCC'],
            nickname: user.nick,
            level: user.level,
            exp: user.exp,
            hcoin: user.hcoin,
            scoin: user.scoin,
            stamina: user.stamina,
            staminaRecoverLeftTime: 360,
            staminaRecoverConfigTime: 360,
            equipmentSizeLimit: 1000,
            selfDesc: user.selfDesc,
            payHcoin: 0,
            freeHcoin: user.hcoin,
            assistantAvatarId: user.assistantAvatarId,
            isAllowCostSeniorEquipOnCurDevice: false,
            birthday: user.birthDate||0,
            monthRechargePrice: 0,
            waitDelHcoin: 0,
            todayRechargePrice: 0,
            useFrameId: 200001,
            isAll: true,
            mcoin: 0,
            openPanelActivityList: [
                2,
                6
            ],
            onPhonePendantId: 350005,
            chatworldActivityInfo: {},
            levelLockId: 1,
            warshipAvatar: {
                warshipFirstAvatarId: user.warshipFirstAvatarId,
                warshipSecondAvatarId: 0
            },
            customHeadId: 161001,
            totalLoginDays: 2,
            registerTime: 1673232737,
            warshipTheme: user.warshipId?{
                warshipId: user.warshipId
            }:{}
        } as GetMainDataRsp)
    }

    if(packet.typeList.includes(GetMainDataReq_DataType.STAMINA)){
        rsp.stamina = user.stamina
        rsp.staminaRecoverLeftTime = 360,
        rsp.staminaRecoverConfigTime = 360
        return Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, rsp)
    }
    
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode['SUCC'],
        nickname: user.nick,
        level: user.level,
        exp: user.exp,
        hcoin: user.hcoin,
        scoin: user.scoin,
        stamina: user.stamina,
        staminaRecoverLeftTime: 360,
        staminaRecoverConfigTime: 360,
        equipmentSizeLimit: 1000,
        selfDesc: user.selfDesc,
        payHcoin: 0,
        freeHcoin: user.hcoin,
        assistantAvatarId: user.assistantAvatarId,
        isAllowCostSeniorEquipOnCurDevice: false,
        birthday: user.birthDate||0,
        monthRechargePrice: 0,
        waitDelHcoin: 0,
        todayRechargePrice: 0,
        useFrameId: 200001,
        isAll: true,
        mcoin: 0,
        openPanelActivityList: [
            2,
            6
        ],
        onPhonePendantId: 350005,
        chatworldActivityInfo: {},
        levelLockId: 1,
        warshipAvatar: {
            warshipFirstAvatarId: user.warshipFirstAvatarId,
            warshipSecondAvatarId: 0
        },
        customHeadId: 161001,
        totalLoginDays: 2,
        registerTime: 1673232737,
        warshipTheme: user.warshipId?{
            warshipId: user.warshipId
        }:{}
    } as GetMainDataRsp)
}