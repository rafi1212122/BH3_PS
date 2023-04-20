import net from "net"
import { AcceptOpenworldStoryReq, AcceptOpenworldStoryRsp, AcceptOpenworldStoryRsp_CmdId, AcceptOpenworldStoryRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: AcceptOpenworldStoryReq) => {
    Packet.getInstance().serializeAndSend(socket, AcceptOpenworldStoryRsp_CmdId.CMD_ID, {
        retcode: AcceptOpenworldStoryRsp_Retcode.SUCC,
        storyId: packet.storyId
    } as AcceptOpenworldStoryRsp)
}