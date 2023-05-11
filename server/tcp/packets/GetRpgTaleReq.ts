import { GetRpgTaleReq, GetRpgTaleRsp, GetRpgTaleRsp_CmdId, GetRpgTaleRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetRpgTaleReq

    const rsp = Packet.encode(GetRpgTaleRsp, {
        retcode: GetRpgTaleRsp_Retcode.SUCC,
        taleId: data.taleId,
        isAll: data.isAll
    }, GetRpgTaleRsp_CmdId.CMD_ID)

    session.send(rsp)
}