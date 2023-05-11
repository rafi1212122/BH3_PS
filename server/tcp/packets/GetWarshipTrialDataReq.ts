import { GetWarshipTrialDataRsp, GetWarshipTrialDataRsp_CmdId, GetWarshipTrialDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWarshipTrialDataRsp, {
        retcode: GetWarshipTrialDataRsp_Retcode.SUCC,
        trialWarshipList: [
            {
                sampleId: 410002,
                endTime: 2380724800
            }
        ],
        isAll: true
    }, GetWarshipTrialDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}