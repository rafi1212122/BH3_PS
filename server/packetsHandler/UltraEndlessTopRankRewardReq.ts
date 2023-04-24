import net from "net"
import { UltraEndlessTopRankRewardReq, UltraEndlessTopRankRewardRsp, UltraEndlessTopRankRewardRsp_CmdId, UltraEndlessTopRankRewardRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UltraEndlessTopRankRewardReq) => {
    Packet.getInstance().serializeAndSend(socket, UltraEndlessTopRankRewardRsp_CmdId.CMD_ID, {
        retcode: UltraEndlessTopRankRewardRsp_Retcode.SUCC,
        rank: 1,
        scheduleId: 3204
    } as UltraEndlessTopRankRewardRsp)
}