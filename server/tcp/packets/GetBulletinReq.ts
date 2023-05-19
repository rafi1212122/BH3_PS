import { GetBulletinRsp, GetBulletinRsp_CmdId, GetBulletinRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetBulletinRsp, {
        retcode: GetBulletinRsp_Retcode.SUCC,
        bulletinList: [],
        isAll: true
    }, GetBulletinRsp_CmdId.CMD_ID)

    session.send(rsp)
}