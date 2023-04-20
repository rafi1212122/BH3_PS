import net from "net"
import { GetOpenworldStageReq, GetOpenworldStageRsp, GetOpenworldStageRsp_CmdId, GetOpenworldStageRsp_Retcode, OpenworldQuestStatus } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetOpenworldStageReq) => {
    Packet.getInstance().serializeAndSend(socket, GetOpenworldStageRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldStageRsp_Retcode.SUCC,
        mapId: packet.mapId,
        mechaLostHpPercent: 0,
        mechaLostSpPercent: 0,
        mapEnergy: 0,
        scDlcFeverScore: 0,
        scDlcClimaxScore: 0
    } as GetOpenworldStageRsp)
}