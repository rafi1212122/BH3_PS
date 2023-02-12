import net from "net"
import { StaminaExchangeReq, StaminaExchangeRsp, StaminaExchangeRsp_CmdId, StaminaExchangeRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer";

export default (socket: net.Socket, packet:  StaminaExchangeReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user) {
        return Packet.getInstance().serializeAndSend(socket, StaminaExchangeRsp_CmdId.CMD_ID, {
            retcode: StaminaExchangeRsp_Retcode.FAIL,
        } as StaminaExchangeRsp)
    }
    
    Packet.getInstance().serializeAndSend(socket, StaminaExchangeRsp_CmdId.CMD_ID, {
        retcode: StaminaExchangeRsp_Retcode.SUCC,
        staminaGet: 50 // sub in with actual config amount
    } as StaminaExchangeRsp)
}
