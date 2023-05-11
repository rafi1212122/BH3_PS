import { GetBulletinActivityMissionReq, GetBulletinActivityMissionRsp, GetBulletinActivityMissionRsp_CmdId, GetBulletinActivityMissionRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetBulletinActivityMissionReq

    const rsp = Packet.encode(GetBulletinActivityMissionRsp, {
        retcode: GetBulletinActivityMissionRsp_Retcode.SUCC,
        missionGroupList: data.activityIdList?.map(activityId => ({
            activityId
        }))
    }, GetBulletinActivityMissionRsp_CmdId.CMD_ID)

    session.send(rsp)
}