import net from "net"
import logger from "../../util/logger"
import { GetClearStageActivityReq, GetClearStageActivityRsp, GetClearStageActivityRsp_CmdId, GetClearStageActivityRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClearStageActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetClearStageActivityRsp_CmdId.CMD_ID, {
        retcode: GetClearStageActivityRsp_Retcode.SUCC,
        activity: {
            
        }
    } as GetClearStageActivityRsp)
}