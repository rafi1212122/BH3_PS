import net from "net"
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_CmdId, GetMissionDataRsp_Retcode, MissionStatus } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMissionDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMissionDataRsp_CmdId.CMD_ID, {
        retcode: GetMissionDataRsp_Retcode.SUCC,
        isAll: true,
    } as GetMissionDataRsp)
}