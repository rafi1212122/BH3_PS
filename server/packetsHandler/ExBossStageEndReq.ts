import net from "net"
import { ExBossStageEndReq, ExBossStageEndRsp, ExBossStageEndRsp_CmdId, ExBossStageEndRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ExBossStageEndReq) => {
    Packet.getInstance().serializeAndSend(socket, ExBossStageEndRsp_CmdId.CMD_ID, {
        retcode: ExBossStageEndRsp_Retcode.SUCC,
        bossId: packet.bossId,
        endStatus: packet.endStatus
    } as ExBossStageEndRsp)
}