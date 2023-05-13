import { GetTeamListReq, GetTeamListRsp, GetTeamListRsp_CmdId, GetTeamListRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetTeamListRsp, {
        retcode: GetTeamListRsp_Retcode.SUCC,
        teamDataList: []
    }, GetTeamListRsp_CmdId.CMD_ID)

    session.send(rsp)
}