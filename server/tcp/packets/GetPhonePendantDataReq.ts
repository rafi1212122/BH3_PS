import { GetPhonePendantDataRsp, GetPhonePendantDataRsp_CmdId, GetPhonePendantDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetPhonePendantDataRsp, {
        retcode: GetPhonePendantDataRsp_Retcode.SUCC,
        isAll: true,
        phonePendantList: [
            {
                id: 350005
            }
        ]
    }, GetPhonePendantDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}