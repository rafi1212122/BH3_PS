import net from "net"
import { GetMinuteTimesReq, GetMinuteTimesRsp, GetMinuteTimesRsp_CmdId, GetMinuteTimesRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMinuteTimesReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMinuteTimesRsp_CmdId.CMD_ID, {
        retcode: GetMinuteTimesRsp_Retcode.SUCC,
        leftTimes: 5,
        recoverTime: 0
    } as GetMinuteTimesRsp)
}