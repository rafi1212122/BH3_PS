import net from "net"
import logger from "../../util/logger"
import { UpdateMissionProgressReq, UpdateMissionProgressRsp, UpdateMissionProgressRsp_CmdId, UpdateMissionProgressRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UpdateMissionProgressReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, UpdateMissionProgressRsp_CmdId.CMD_ID, {
        retcode: UpdateMissionProgressRsp_Retcode.SUCC,
    } as UpdateMissionProgressRsp)
}