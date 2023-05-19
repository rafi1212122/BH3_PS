import dayjs from "dayjs";
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_CmdId, GetMissionDataRsp_Retcode, MissionStatus } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import MissionData from "../../../utils/excel/MissionData";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player

    const rsp = Packet.encode(GetMissionDataRsp, {
        retcode: GetMissionDataRsp_Retcode.SUCC,
        missionList: MissionData.all().map(mission => ({
            missionId: mission.id,
            status: MissionStatus.MISSION_FINISH,
            progress: mission.totalProgress,
            beginTime: dayjs(user.get('createdAt')).unix(),
            endTime: 2073239999,
            priority: mission.Priority,
            cycleId: 207323999
        })),
        isAll: true
    }, GetMissionDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}