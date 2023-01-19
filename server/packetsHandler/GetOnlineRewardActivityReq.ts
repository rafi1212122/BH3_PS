import net from "net"
import { GetOnlineRewardActivityReq, GetOnlineRewardActivityRsp, GetOnlineRewardActivityRsp_CmdId, GetOnlineRewardActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetOnlineRewardActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetOnlineRewardActivityRsp_CmdId.CMD_ID, {
        retcode: GetOnlineRewardActivityRsp_Retcode.ACTIVITY_NOT_OPEN,
    } as GetOnlineRewardActivityRsp)
}