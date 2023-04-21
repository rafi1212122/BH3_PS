import net from "net"
import { GetOpenworldQuestActivityReq, GetOpenworldQuestActivityRsp, GetOpenworldQuestActivityRsp_CmdId, GetOpenworldQuestActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetOpenworldQuestActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetOpenworldQuestActivityRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldQuestActivityRsp_Retcode.NOT_OPEN,
    } as GetOpenworldQuestActivityRsp)
}