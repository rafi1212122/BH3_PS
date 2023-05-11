import { GetChapterCompensationInfoRsp, GetChapterCompensationInfoRsp_CmdId, GetChapterCompensationInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetChapterCompensationInfoRsp, {
        retcode: GetChapterCompensationInfoRsp_Retcode.SUCC,
        isAll: true
    }, GetChapterCompensationInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}