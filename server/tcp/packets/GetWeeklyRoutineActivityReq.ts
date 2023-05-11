import { GetWeeklyRoutineActivityRsp, GetWeeklyRoutineActivityRsp_CmdId, GetWeeklyRoutineActivityRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWeeklyRoutineActivityRsp, {
        retcode: GetWeeklyRoutineActivityRsp_Retcode.NOT_IN_SCHEDULE
    }, GetWeeklyRoutineActivityRsp_CmdId.CMD_ID)

    session.send(rsp)
}