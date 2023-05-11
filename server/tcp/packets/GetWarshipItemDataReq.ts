import { GetWarshipItemDataRsp, GetWarshipItemDataRsp_CmdId, GetWarshipItemDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWarshipItemDataRsp, {
        retcode: GetWarshipItemDataRsp_Retcode.SUCC,
        isAll: true,
        warshipItemIdList: [
            400004,
            400006,
            401005,
            401006,
            401008,
            401009,
            401010,
            401011,
            401998,
            401999
        ]
    }, GetWarshipItemDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}