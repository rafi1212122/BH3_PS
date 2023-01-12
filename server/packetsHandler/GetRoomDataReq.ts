import net from "net"
import { GetRoomDataReq, GetRoomDataRsp, GetRoomDataRsp_CmdId, GetRoomDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRoomDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetRoomDataRsp_CmdId.CMD_ID, {
        retcode: GetRoomDataRsp_Retcode.SUCC,
    } as GetRoomDataRsp)
}