import { GetMissionGroupMainInfoRsp, GetMissionGroupMainInfoRsp_CmdId, GetMissionGroupMainInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetMissionGroupMainInfoRsp, {
        retcode: GetMissionGroupMainInfoRsp_Retcode.SUCC
    }, GetMissionGroupMainInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}