import { GetStageActDifficultyRsp, GetStageActDifficultyRsp_CmdId, GetStageActDifficultyRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetStageActDifficultyRsp, {
        retcode: GetStageActDifficultyRsp_Retcode.SUCC
    }, GetStageActDifficultyRsp_CmdId.CMD_ID)

    session.send(rsp)
}