import net from "net"
import { GetHaveTakenShareRewardReq, GetHaveTakenShareRewardRsp, GetHaveTakenShareRewardRsp_CmdId, GetHaveTakenShareRewardRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetHaveTakenShareRewardReq) => {
    Packet.getInstance().serializeAndSend(socket, GetHaveTakenShareRewardRsp_CmdId.CMD_ID, {
        retcode: GetHaveTakenShareRewardRsp_Retcode.SUCC,
    } as GetHaveTakenShareRewardRsp)
}