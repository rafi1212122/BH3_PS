import net from "net"
import { GetExBossRankReq, GetExBossRankRsp, GetExBossRankRsp_CmdId, GetExBossRankRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetExBossRankReq) => {
    Packet.getInstance().serializeAndSend(socket, GetExBossRankRsp_CmdId.CMD_ID, {
        retcode: GetExBossRankRsp_Retcode.SUCC,
        bossId: packet.bossId,
        rankId: packet.rankId,
        rankData: {
            myRank: 1,
            myRankType: 1,
            myScore: 0
        }
    } as GetExBossRankRsp)
}