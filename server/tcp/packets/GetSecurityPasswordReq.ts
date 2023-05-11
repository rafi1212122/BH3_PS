import { GetSecurityPasswordRsp, GetSecurityPasswordRsp_CmdId, GetSecurityPasswordRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetSecurityPasswordRsp, {
        retcode: GetSecurityPasswordRsp_Retcode.NOT_OPEN
    }, GetSecurityPasswordRsp_CmdId.CMD_ID)

    session.send(rsp)
}