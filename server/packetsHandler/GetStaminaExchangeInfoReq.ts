import net from "net"
import { GetStaminaExchangeInfoReq, GetStaminaExchangeInfoRsp, GetStaminaExchangeInfoRsp_CmdId, GetStaminaExchangeInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetStaminaExchangeInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetStaminaExchangeInfoRsp_CmdId.CMD_ID, {
        retcode: GetStaminaExchangeInfoRsp_Retcode.SUCC,
        usableTimes: 20,
        totalTimes: 20,
        hcoinCost: 1,
        staminaGet: 50
    } as GetStaminaExchangeInfoRsp)
}