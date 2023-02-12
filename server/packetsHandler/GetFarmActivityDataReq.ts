import net from "net"
import { GetFarmActivityDataReq, GetFarmActivityDataRsp, GetFarmActivityDataRsp_CmdId, GetFarmActivityDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetFarmActivityDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetFarmActivityDataRsp_CmdId.CMD_ID, {
        retcode: GetFarmActivityDataRsp_Retcode.NOT_IN_SCHEDULE,
    } as GetFarmActivityDataRsp)
}