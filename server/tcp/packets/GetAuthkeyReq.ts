import { GetAuthkeyReq, GetAuthkeyRsp, GetAuthkeyRsp_CmdId, GetAuthkeyRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetAuthkeyReq

    const rsp = Packet.encode(GetAuthkeyRsp, {
        retcode: GetAuthkeyRsp_Retcode.SUCC,
        authkey: "0",
        authAppid: data.authAppid,
        signType: 2,
        authkeyVer: 1
    }, GetAuthkeyRsp_CmdId.CMD_ID)

    session.send(rsp)
}