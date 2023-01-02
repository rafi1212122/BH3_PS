import net from "net"
import logger from "../../util/logger"
import { GetMainDataReq, GetMainDataRsp, GetMainDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMainDataReq, cmdId: number) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
            retcode: GetMainDataRsp_Retcode['FAIL'],
        } as GetMainDataRsp)
        return socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
    }
    reply = Packet.getInstance().serialize(CmdId['GetMainDataRsp'], {
        retcode: GetMainDataRsp_Retcode.SUCC,
        nickname: user.name,
        level: 1,
        exp: 0,
        hcoin: 700,
        scoin: 900000,
        stamina: 200,
        staminaRecoverLeftTime: 0,
        staminaRecoverConfigTime: 360,
        equipmentSizeLimit: 2000,
        selfDesc: "",
        payHcoin: 100,
        freeHcoin: 600,
        assistantAvatarId: 110,
        isAllowCostSeniorEquipOnCurDevice: true,
        birthday: 2903,
        monthRechargePrice: 0,
        waitDelHcoin: 0,
        todayRechargePrice: 0,
        useFrameId: 200006,
        isAll: true,
        mcoin: 0,
        openPanelActivityList: [ 2, 6 ],
        onPhonePendantId: 350053,
        levelLockId: 2,
        chatworldActivityInfo: {
            isHasNpcRedEnvelope: true,
        },
        warshipAvatar: {
            warshipFirstAvatarId: 101,
            warshipSecondAvatarId: 0
        },
        totalLoginDays: 0,
        registerTime: parseInt(getTs())-100000,
        warshipTheme: {
            warshipId: 400004
        },
        onMedal: {
            id: 101031,
            endTime: parseInt(getTs())+100000
        }
    } as GetMainDataRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}