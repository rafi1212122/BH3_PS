import net from "net"
import { GetBuffEffectReq, GetBuffEffectRsp, GetBuffEffectRsp_CmdId, GetBuffEffectRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetBuffEffectReq) => {
    Packet.getInstance().serializeAndSend(socket, GetBuffEffectRsp_CmdId.CMD_ID, {
        retcode: GetBuffEffectRsp_Retcode.SUCC,
    } as GetBuffEffectRsp)
}