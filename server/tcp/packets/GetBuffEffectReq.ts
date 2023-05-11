import { GetBuffEffectRsp, GetBuffEffectRsp_CmdId, GetBuffEffectRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetBuffEffectRsp, {
        retcode: GetBuffEffectRsp_Retcode.SUCC,
    }, GetBuffEffectRsp_CmdId.CMD_ID)

    session.send(rsp)
}