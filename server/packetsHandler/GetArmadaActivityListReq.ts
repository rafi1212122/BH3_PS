import net from "net"
import { GetArmadaActivityListReq, GetArmadaActivityListRsp, GetArmadaActivityListRsp_CmdId, GetArmadaActivityListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetArmadaActivityListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetArmadaActivityListRsp_CmdId.CMD_ID, {
        retcode: GetArmadaActivityListRsp_Retcode.SUCC
    } as GetArmadaActivityListRsp)
}