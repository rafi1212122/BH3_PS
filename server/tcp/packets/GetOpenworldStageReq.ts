import { GetOpenworldStageReq, GetOpenworldStageRsp, GetOpenworldStageRsp_CmdId, GetOpenworldStageRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetOpenworldStageReq

    const rsp = Packet.encode(GetOpenworldStageRsp, {
        retcode: GetOpenworldStageRsp_Retcode.SUCC,
        mapId: data.mapId
    }, GetOpenworldStageRsp_CmdId.CMD_ID)

    session.send(rsp)
}