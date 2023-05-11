import { GetCustomHeadDataRsp, GetCustomHeadDataRsp_CmdId, GetCustomHeadDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetCustomHeadDataRsp, {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: [
            { id: 161001 }
        ]
    }, GetCustomHeadDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}