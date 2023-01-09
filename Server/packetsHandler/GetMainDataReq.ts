import net from "net"
import { GetMainDataReq, GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMainDataReq, cmdId: number) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    // if(!user){
    //     return Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
    //         retcode: GetMainDataRsp_Retcode['FAIL'],
    //     } as GetMainDataRsp)
    // }
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode['SUCC'],
        nickname: "",
        level: 1,
        exp: 0,
        hcoin: 0,
        scoin: 0,
        stamina: 80,
        staminaRecoverLeftTime: 0,
        staminaRecoverConfigTime: 360,
        equipmentSizeLimit: 1000,
        selfDesc: "",
        payHcoin: 0,
        freeHcoin: 0,
        assistantAvatarId: 0,
        isAllowCostSeniorEquipOnCurDevice: false,
        birthday: 0,
        monthRechargePrice: 0,
        waitDelHcoin: 0,
        todayRechargePrice: 0,
        useFrameId: 200001,
        isAll: true,
        mcoin: 0,
        openPanelActivityList: [
            2
        ],
        onPhonePendantId: 350005,
        chatworldActivityInfo: {},
        levelLockId: 1,
        warshipAvatar: {
            warshipFirstAvatarId: 0,
            warshipSecondAvatarId: 0
        },
        customHeadId: 161001,
        totalLoginDays: 1,
        registerTime: 1673232737,
        warshipTheme: {}
    } as Partial<GetMainDataRsp>)
}