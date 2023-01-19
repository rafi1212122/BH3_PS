import net from "net"
import { GetConsignedOrderDataReq, GetConsignedOrderDataRsp, GetConsignedOrderDataRsp_CmdId, GetConsignedOrderDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetConsignedOrderDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetConsignedOrderDataRsp_CmdId.CMD_ID, {
        retcode: GetConsignedOrderDataRsp_Retcode.NOT_IN_ARMADA,
    } as GetConsignedOrderDataRsp)
}