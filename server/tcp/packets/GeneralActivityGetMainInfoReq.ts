import { GeneralActivityGetMainInfoReq, GeneralActivityGetMainInfoRsp, GeneralActivityGetMainInfoRsp_CmdId, GeneralActivityGetMainInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import { activityData } from "./GeneralActivityGetScheduleReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GeneralActivityGetMainInfoReq

    const rsp = Packet.encode(GeneralActivityGetMainInfoRsp, {
        retcode: GeneralActivityGetMainInfoRsp_Retcode.SUCC,
        activityList: data.activityIdList?.map(id => ({
            generalBasicInfo: {
                activityId: id,
                seriesActivityId: [id],
                scheduleId: activityData.find(activity => activity.activityId === id)?.scheduleId
            }
        }))
    }, GeneralActivityGetMainInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}