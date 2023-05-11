import { GetChapterActivityDataReq, GetChapterActivityDataRsp, GetChapterActivityDataRsp_CmdId, GetChapterActivityDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as GetChapterActivityDataReq

    const rsp = Packet.encode(GetChapterActivityDataRsp, {
        retcode: GetChapterActivityDataRsp_Retcode.SUCC,
    }, GetChapterActivityDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}