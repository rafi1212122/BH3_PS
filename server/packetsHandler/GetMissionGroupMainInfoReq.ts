import net from "net"
import { GetMissionGroupMainInfoReq, GetMissionGroupMainInfoRsp, GetMissionGroupMainInfoRsp_CmdId, GetMissionGroupMainInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMissionGroupMainInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMissionGroupMainInfoRsp_CmdId.CMD_ID, {
        retcode: GetMissionGroupMainInfoRsp_Retcode.SUCC,
    } as GetMissionGroupMainInfoRsp)
}