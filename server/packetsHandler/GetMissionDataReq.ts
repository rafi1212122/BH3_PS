import net from "net"
import logger from "../../util/logger"
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_CmdId, GetMissionDataRsp_Retcode, Mission, MissionStatus } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMissionDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMissionDataRsp_CmdId.CMD_ID, {
        retcode: GetMissionDataRsp_Retcode.SUCC,
        missionList: [
            {
                missionId: 17046,
                status: MissionStatus.MISSION_FINISH,
                progress: 1,
                beginTime: 1673603579,
                endTime: 1673639999,
                priority: 30111,
                cycleId: 19092177
            }
        ],
        isAll: true,
    } as GetMissionDataRsp)
}