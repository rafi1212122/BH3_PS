import net from "net"
import { GetFriendListReq, GetFriendListRsp, GetFriendListRsp_CmdId, GetFriendListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetFriendListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetFriendListRsp_CmdId.CMD_ID, {
        retcode: GetFriendListRsp_Retcode.SUCC,
        isWholeData: true,
        assistantNum: 0
    } as GetFriendListRsp)
}