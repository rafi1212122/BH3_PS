import dayjs from "dayjs";
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_CmdId, GetMissionDataRsp_Retcode, MissionStatus } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player

    const rsp = Packet.encode(GetMissionDataRsp, {
        retcode: GetMissionDataRsp_Retcode.SUCC,
        missionList: [
            {
                missionId: 651018,
                status: MissionStatus.MISSION_DOING,
                progress: 0,
                beginTime: dayjs(user.get('createdAt')).unix(),
                endTime: 2073239999,
                priority: 30111,
                cycleId: 19091018
            }
        ],
        isAll: true
    }, GetMissionDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}