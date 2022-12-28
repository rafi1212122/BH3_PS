import net from "net"
import { GetConfigReq, GetConfigRsp, GetConfigRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetConfigReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetConfigRsp'], {
        retcode: GetConfigRsp_Retcode.SUCC,
        staminaRecoverConfigTime: 60,
        avatarReviveHcoinCost: 1,
        sameTypePowerUpRate: 2,
        dayTimeOffset: 0,
        serverCurTime: parseInt(getTs()),
        powerUpScoinCostRate: 1,
        maxFriendNum: 10,
        antiCheatStageCheckConfig: {
            checkStageIdList: [] as number[],
            checkStageTypeList: [] as number[]
        }
    } as GetConfigRsp)
    socket.write(reply)
}