import net from "net"
import { UpdateMissionProgressReq, UpdateMissionProgressRsp, UpdateMissionProgressRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UpdateMissionProgressReq) => {
    const reply = Packet.getInstance().serialize(CmdId['UpdateMissionProgressRsp'], {
        retcode: UpdateMissionProgressRsp_Retcode.SUCC,
    } as UpdateMissionProgressRsp)
    socket.write(reply)
}