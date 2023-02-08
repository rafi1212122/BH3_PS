import net from "net"
import { GetPlotListReq, GetPlotListRsp, GetPlotListRsp_CmdId, GetPlotListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPlotListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetPlotListRsp_CmdId.CMD_ID, {
        retcode: GetPlotListRsp_Retcode.SUCC,
        plotList: [
            301041,
            301051,
            301062,
            301081,
            301082,
            301101,
            301111,
            301121,
            301131,
            301132,
            301141
        ]
    } as GetPlotListRsp)
}