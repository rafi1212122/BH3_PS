import net from "net"
import { GetSignInRewardStatusReq, GetSignInRewardStatusRsp, GetSignInRewardStatusRsp_CmdId, GetSignInRewardStatusRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetSignInRewardStatusReq) => {
    Packet.getInstance().serializeAndSend(socket, GetSignInRewardStatusRsp_CmdId.CMD_ID, {
        retcode: GetSignInRewardStatusRsp_Retcode.SUCC,
        isNeedSignIn: true,
        nextSignInDay: 2,
        nextSignInRewardId: 1211
    } as GetSignInRewardStatusRsp)
}