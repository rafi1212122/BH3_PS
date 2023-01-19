import net from "net"
import { GetAskAddFriendListReq, GetAskAddFriendListRsp, GetAskAddFriendListRsp_CmdId, GetAskAddFriendListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAskAddFriendListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAskAddFriendListRsp_CmdId.CMD_ID, {
        retcode: GetAskAddFriendListRsp_Retcode.SUCC,
    } as GetAskAddFriendListRsp)
}