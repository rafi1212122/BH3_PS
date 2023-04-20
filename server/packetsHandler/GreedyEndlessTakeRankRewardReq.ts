import net from "net"
import { GreedyEndlessTakeRankRewardReq, GreedyEndlessTakeRankRewardRsp, GreedyEndlessTakeRankRewardRsp_CmdId, GreedyEndlessTakeRankRewardRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GreedyEndlessTakeRankRewardReq) => {
    Packet.getInstance().serializeAndSend(socket, GreedyEndlessTakeRankRewardRsp_CmdId.CMD_ID, {
        retcode: GreedyEndlessTakeRankRewardRsp_Retcode.HAS_TAKE,
    } as GreedyEndlessTakeRankRewardRsp)
}