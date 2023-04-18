import net from "net"
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_CmdId, GetMissionDataRsp_Retcode, MissionStatus } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMissionDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMissionDataRsp_CmdId.CMD_ID, {
        retcode: GetMissionDataRsp_Retcode.SUCC, 
        missionList: [
            {
                missionId: 10001,
                status: MissionStatus.MISSION_FINISH,
                progress: 1,
                beginTime: 1674966397,
                endTime: 1675022399,
                priority: 30111,
                cycleId: 19092177
            }
        ],
        isAll: true,
    } as GetMissionDataRsp)
}