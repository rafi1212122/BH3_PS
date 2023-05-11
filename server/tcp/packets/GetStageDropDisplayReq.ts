import { GetStageDropDisplayReq, GetStageDropDisplayRsp, GetStageDropDisplayRsp_CmdId, GetStageDropDisplayRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetStageDropDisplayReq

    const rsp = Packet.encode(GetStageDropDisplayRsp, {
        retcode: GetStageDropDisplayRsp_Retcode.SUCC,
        stageDropList: data.stageIdList?.map(stageId => ({ stageId }))
    }, GetStageDropDisplayRsp_CmdId.CMD_ID)

    session.send(rsp)
}