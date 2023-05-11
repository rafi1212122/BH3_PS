import { GetRankScheduleDataRsp, GetRankScheduleDataRsp_CmdId, GetRankScheduleDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetRankScheduleDataRsp, {
        retcode: GetRankScheduleDataRsp_Retcode.SUCC
    }, GetRankScheduleDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}