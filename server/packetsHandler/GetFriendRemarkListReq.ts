import net from "net"
import { GetFriendRemarkListReq, GetFriendRemarkListRsp, GetFriendRemarkListRsp_CmdId, GetFriendRemarkListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetFriendRemarkListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetFriendRemarkListRsp_CmdId.CMD_ID, {
        retcode: GetFriendRemarkListRsp_Retcode.SUCC,
    } as GetFriendRemarkListRsp)
}