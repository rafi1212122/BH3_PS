import net from "net"
import { OpenworldStageBeginReq, OpenworldStageBeginRsp, OpenworldStageBeginRsp_CmdId, OpenworldStageBeginRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: OpenworldStageBeginReq) => {
    Packet.getInstance().serializeAndSend(socket, OpenworldStageBeginRsp_CmdId.CMD_ID, {
        retcode: OpenworldStageBeginRsp_Retcode.SUCC,
        mapId: packet.mapId
    } as OpenworldStageBeginRsp)
}