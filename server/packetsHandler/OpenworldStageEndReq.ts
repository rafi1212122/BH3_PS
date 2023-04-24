import net from "net"
import { OpenworldStageEndReq, OpenworldStageEndRsp, OpenworldStageEndRsp_CmdId, OpenworldStageEndRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: OpenworldStageEndReq) => {
    Packet.getInstance().serializeAndSend(socket, OpenworldStageEndRsp_CmdId.CMD_ID, {
        retcode: OpenworldStageEndRsp_Retcode.SUCC,
        endStatus: packet.endStatus,
        mapId: packet.mapId
    } as OpenworldStageEndRsp)
}