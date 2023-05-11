import { GetFinishGuideDataRsp, GetFinishGuideDataRsp_CmdId, GetFinishGuideDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player

    const rsp = Packet.encode(GetFinishGuideDataRsp, {
        retcode: GetFinishGuideDataRsp_Retcode.SUCC,
    }, GetFinishGuideDataRsp_CmdId.CMD_ID)

    if(user.isFirstLogin) {
        session.send(rsp)
    }
}