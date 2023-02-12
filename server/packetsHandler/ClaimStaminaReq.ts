import net from "net"
import { ClaimStaminaReq, ClaimStaminaRsp, ClaimStaminaRsp_CmdId, ClaimStaminaRsp_Retcode, GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer";

export default (socket: net.Socket, packet: ClaimStaminaReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user) {
        return Packet.getInstance().serializeAndSend(socket, ClaimStaminaRsp_CmdId.CMD_ID, {
            retcode: ClaimStaminaRsp_Retcode.FAIL,
        } as ClaimStaminaRsp)
    }
    
    Packet.getInstance().serializeAndSend(socket, ClaimStaminaRsp_CmdId.CMD_ID, {
        retcode: ClaimStaminaRsp_Retcode.SUCC,
        stamina: packet.stamina
    } as ClaimStaminaRsp)
    
    return Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        stamina: user.stamina + packet.stamina
    } as GetMainDataRsp)
}
