import net from "net"
import { ExBossStageBeginReq, ExBossStageBeginRsp, ExBossStageBeginRsp_CmdId, ExBossStageBeginRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import cuid from "cuid"

export default (socket: net.Socket, packet: ExBossStageBeginReq) => {
    Packet.getInstance().serializeAndSend(socket, ExBossStageBeginRsp_CmdId.CMD_ID, {
        retcode: ExBossStageBeginRsp_Retcode.SUCC,
        stageTransactionStr: cuid()
    } as ExBossStageBeginRsp)
}