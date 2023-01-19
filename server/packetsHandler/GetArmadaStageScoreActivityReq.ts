import net from "net"
import logger from "../../util/logger"
import { GetArmadaStageScoreActivityReq, GetArmadaStageScoreActivityRsp, GetArmadaStageScoreActivityRsp_CmdId, GetArmadaStageScoreActivityRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetArmadaStageScoreActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetArmadaStageScoreActivityRsp_CmdId.CMD_ID, {
        retcode: GetArmadaStageScoreActivityRsp_Retcode.NOT_IN_ARMADA
    } as GetArmadaStageScoreActivityRsp)
}