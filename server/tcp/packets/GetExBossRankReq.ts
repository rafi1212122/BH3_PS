import { GetExBossRankReq, GetExBossRankRsp, GetExBossRankRsp_CmdId, GetExBossRankRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetExBossRankReq

    const rsp = Packet.encode(GetExBossRankRsp, {
        retcode: GetExBossRankRsp_Retcode.SUCC,
        bossId: data.bossId,
        rankId: data.rankId,
        rankData: {
            myScore: 0,
            myRank: 1,
            myRankType: 1,
            rankList: []
        }
    }, GetExBossRankRsp_CmdId.CMD_ID)

    session.send(rsp)
}