import dayjs from "dayjs";
import { GetExBossInfoRsp, GetExBossInfoRsp_CmdId, GetExBossInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetExBossInfoRsp, {
        retcode: GetExBossInfoRsp_Retcode.SUCC,
        bossInfo: {
            enterTimes: 0,
            scheduleId: 1,
            rankId: 104,
            maxSweepLevel: 5,
            bossIdList: [
                {
                    bossId: 18026
                },
                {
                    bossId: 37025
                },
                {
                    bossId: 9021
                },
            ]
        }
    }, GetExBossInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}