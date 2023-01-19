import net from "net"
import { GetWareHouseDataReq, GetWareHouseDataRsp, GetWareHouseDataRsp_CmdId, GetWareHouseDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWareHouseDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWareHouseDataRsp_CmdId.CMD_ID, {
        retcode: GetWareHouseDataRsp_Retcode.NOT_IN_ARMADA,
    } as GetWareHouseDataRsp)
}