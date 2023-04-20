import net from "net"
import { GetRewardLineActivityReq, GetRewardLineActivityRsp, GetRewardLineActivityRsp_CmdId, GetRewardLineActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRewardLineActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRewardLineActivityRsp_CmdId.CMD_ID, {
        retcode: GetRewardLineActivityRsp_Retcode['SUCC'],
    } as GetRewardLineActivityRsp)
}