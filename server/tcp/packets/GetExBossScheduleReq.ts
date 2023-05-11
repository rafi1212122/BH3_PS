import dayjs from "dayjs";
import { GetExBossScheduleRsp, GetExBossScheduleRsp_CmdId, GetExBossScheduleRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetExBossScheduleRsp, {
        retcode: GetExBossScheduleRsp_Retcode.SUCC,
        beginTime: dayjs().startOf('w').add(4, 'hour').unix(),
        endTime: dayjs().endOf('w').add(-20, 'hour').unix(),
        minLevel: 0,
        rankId: 104,
        scheduleId: 1
    }, GetExBossScheduleRsp_CmdId.CMD_ID)

    session.send(rsp)
}