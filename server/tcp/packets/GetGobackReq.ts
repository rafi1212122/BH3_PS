import { GetGobackRsp, GetGobackRsp_CmdId, GetGobackRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetGobackRsp, {
        retcode: GetGobackRsp_Retcode.SUCC
    }, GetGobackRsp_CmdId.CMD_ID)

    session.send(rsp)
}