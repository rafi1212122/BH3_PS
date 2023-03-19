import net from "net"
import { GetRecommendFriendListReq, GetRecommendFriendListRsp, GetRecommendFriendListRsp_CmdId, GetRecommendFriendListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRecommendFriendListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRecommendFriendListRsp_CmdId.CMD_ID, {
        retcode: GetRecommendFriendListRsp_Retcode.SUCC,
    } as GetRecommendFriendListRsp)
}