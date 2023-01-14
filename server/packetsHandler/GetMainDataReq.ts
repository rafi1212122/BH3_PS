import net from "net"
import { GetMainDataReq, GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, RoomMode, SyncRoomDataNotify, SyncRoomDataNotify_CmdId } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMainDataReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
            retcode: GetMainDataRsp_Retcode['FAIL'],
        } as GetMainDataRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode['SUCC'],
        nickname: user.nick||"",
        level: 16,
        exp: 164,
        hcoin: 1550,
        scoin: 320186,
        stamina: 96,
        staminaRecoverLeftTime: 0,
        staminaRecoverConfigTime: 360,
        equipmentSizeLimit: 1000,
        selfDesc: "",
        payHcoin: 0,
        freeHcoin: 1550,
        assistantAvatarId: user.assistantAvatarId,
        isAllowCostSeniorEquipOnCurDevice: false,
        birthday: user.birthDate||0,
        monthRechargePrice: 0,
        waitDelHcoin: 0,
        todayRechargePrice: 0,
        useFrameId: 200006,
        isAll: true,
        mcoin: 0,
        openPanelActivityList: [
            2
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
    } as Partial<GetMainDataRsp>)
    
    Packet.getInstance().serializeAndSend(socket, SyncRoomDataNotify_CmdId.CMD_ID, {
        playerRoomStatus: {
            roomMode: RoomMode.ROOM_MODE_INVALID,
            roomId: 0
        },
        roomInfo: {}
    } as SyncRoomDataNotify)
}