import { GetClientDataReq, GetClientDataRsp, GetClientDataRsp_CmdId, GetClientDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetClientDataReq

    const rsp = Packet.encode(GetClientDataRsp, {
        retcode: GetClientDataRsp_Retcode.NOT_FOUND,
        id: data.id,
        type: data.type
    }, GetClientDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}