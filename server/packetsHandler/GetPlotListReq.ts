import net from "net"
import { GetPlotListReq, GetPlotListRsp, GetPlotListRsp_CmdId, GetPlotListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPlotListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetPlotListRsp_CmdId.CMD_ID, {
        retcode: GetPlotListRsp_Retcode.SUCC,
    } as GetPlotListRsp)
}