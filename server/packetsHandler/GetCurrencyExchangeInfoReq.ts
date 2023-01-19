import net from "net"
import { GetCurrencyExchangeInfoReq, GetCurrencyExchangeInfoRsp, GetCurrencyExchangeInfoRsp_CmdId, GetCurrencyExchangeInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCurrencyExchangeInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetCurrencyExchangeInfoRsp_CmdId.CMD_ID, {
        retcode: GetCurrencyExchangeInfoRsp_Retcode.SUCC,
        purpleJadeExchangedNum: 0
    } as GetCurrencyExchangeInfoRsp)
}