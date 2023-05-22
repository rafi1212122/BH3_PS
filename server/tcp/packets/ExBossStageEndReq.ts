import cuid from "cuid";
import { ExBossStageEndReq, ExBossStageEndRsp, ExBossStageEndRsp_CmdId, ExBossStageEndRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as ExBossStageEndReq

    const rsp = Packet.encode(ExBossStageEndRsp, {
        retcode: ExBossStageEndRsp_Retcode.SUCC,
        bossId: data.bossId,
        endStatus: data.endStatus
    }, ExBossStageEndRsp_CmdId.CMD_ID)

    session.send(rsp)
}