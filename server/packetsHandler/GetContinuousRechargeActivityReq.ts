import net from "net"
import { GetContinuousRechargeActivityReq, GetContinuousRechargeActivityRsp, GetContinuousRechargeActivityRsp_CmdId, GetContinuousRechargeActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetContinuousRechargeActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetContinuousRechargeActivityRsp_CmdId.CMD_ID, {
        retcode: GetContinuousRechargeActivityRsp_Retcode.SUCC,
        activityId: 0
    } as GetContinuousRechargeActivityRsp)
}