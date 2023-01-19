import net from "net"
import { EndlessType, EnterWorldChatroomReq, EnterWorldChatroomRsp, EnterWorldChatroomRsp_CmdId, EnterWorldChatroomRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: EnterWorldChatroomReq) => {
    Packet.getInstance().serializeAndSend(socket, EnterWorldChatroomRsp_CmdId.CMD_ID, {
        retcode: EnterWorldChatroomRsp_Retcode.FEATURE_CLOSED,
    } as EnterWorldChatroomRsp)
}