import net from "net"
import { UpdateMissionProgressReq, UpdateMissionProgressRsp, UpdateMissionProgressRsp_CmdId, UpdateMissionProgressRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UpdateMissionProgressReq) => {
    console.log('mission prog:', packet)
    Packet.getInstance().serializeAndSend(socket, UpdateMissionProgressRsp_CmdId.CMD_ID, {
        retcode: UpdateMissionProgressRsp_Retcode.SUCC,
    } as UpdateMissionProgressRsp)
}