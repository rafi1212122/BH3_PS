import net from "net"
import logger from "../../util/logger"
import { StageEndReq, StageEndRsp, StageEndRsp_CmdId, StageEndRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: StageEndReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, StageEndRsp_CmdId.CMD_ID, {
        retcode: StageEndRsp_Retcode.SUCC,
    } as StageEndRsp)
}