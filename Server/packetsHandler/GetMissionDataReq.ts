import net from "net"
import logger from "../../util/logger"
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_CmdId, GetMissionDataRsp_Retcode, Mission } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMissionDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetMissionDataRsp_CmdId.CMD_ID, {
        retcode: GetMissionDataRsp_Retcode.SUCC,
        missionList: [] as Mission[],
        isAll: true,
    } as GetMissionDataRsp)
}