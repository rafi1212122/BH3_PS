import { GetChallengeStepCompensationInfoRsp, GetChallengeStepCompensationInfoRsp_CmdId, GetChallengeStepCompensationInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetChallengeStepCompensationInfoRsp, {
        retcode: GetChallengeStepCompensationInfoRsp_Retcode.SUCC,
    }, GetChallengeStepCompensationInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}