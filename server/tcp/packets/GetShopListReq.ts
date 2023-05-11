import { GetShopListRsp, GetShopListRsp_CmdId, GetShopListRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetShopListRsp, {
        retcode: GetShopListRsp_Retcode.SUCC
    }, GetShopListRsp_CmdId.CMD_ID)

    session.send(rsp)
}