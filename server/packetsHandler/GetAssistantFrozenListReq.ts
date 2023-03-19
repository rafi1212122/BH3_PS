import net from "net"
import { GetAssistantFrozenListReq, GetAssistantFrozenListRsp, GetAssistantFrozenListRsp_CmdId, GetAssistantFrozenListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAssistantFrozenListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAssistantFrozenListRsp_CmdId.CMD_ID, {
        retcode: GetAssistantFrozenListRsp_Retcode.SUCC,
    } as GetAssistantFrozenListRsp)
}