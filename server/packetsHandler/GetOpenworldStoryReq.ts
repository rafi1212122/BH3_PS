import net from "net"
import { GetOpenworldStoryReq, GetOpenworldStoryRsp, GetOpenworldStoryRsp_CmdId, GetOpenworldStoryRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetOpenworldStoryReq) => {
    Packet.getInstance().serializeAndSend(socket, GetOpenworldStoryRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldStoryRsp_Retcode.SUCC,
        isAll: true,
    } as GetOpenworldStoryRsp)
}