import { EndlessType, GetCardProductInfoRsp, GetCardProductInfoRsp_CmdId, GetCardProductInfoRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetCardProductInfoRsp, {
        retcode: GetCardProductInfoRsp_Retcode.SUCC
    }, GetCardProductInfoRsp_CmdId.CMD_ID)

    session.send(rsp)
}