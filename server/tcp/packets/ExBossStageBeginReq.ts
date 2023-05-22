import cuid from "cuid";
import { ExBossStageBeginReq, ExBossStageBeginRsp, ExBossStageBeginRsp_CmdId, ExBossStageBeginRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as ExBossStageBeginReq

    const rsp = Packet.encode(ExBossStageBeginRsp, {
        retcode: ExBossStageBeginRsp_Retcode.SUCC,
        stageTransactionStr: cuid()
    }, ExBossStageBeginRsp_CmdId.CMD_ID)

    session.send(rsp)
}