import { GetWebActivityInfoRsp, GetWebActivityInfoRsp_CmdId, GetWebActivityInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWebActivityInfoRsp, {
        retcode: GetWebActivityInfoRsp_Retcode.SUCC
    }, GetWebActivityInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}