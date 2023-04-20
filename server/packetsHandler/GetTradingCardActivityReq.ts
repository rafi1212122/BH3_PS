import net from "net"
import { GetTradingCardActivityReq, GetTradingCardActivityRsp, GetTradingCardActivityRsp_CmdId, GetTradingCardActivityRsp_Retcode, RaidActiveType } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetTradingCardActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetTradingCardActivityRsp_CmdId.CMD_ID, {
        retcode: GetTradingCardActivityRsp_Retcode.NOT_OPEN
    } as GetTradingCardActivityRsp)
}