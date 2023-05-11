import { OpenworldStageBeginReq, OpenworldStageBeginRsp, OpenworldStageBeginRsp_CmdId, OpenworldStageBeginRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as OpenworldStageBeginReq

	const rsp = Packet.encode(OpenworldStageBeginRsp, {
        retcode: OpenworldStageBeginRsp_Retcode.SUCC,
        mapId: data.mapId
    }, OpenworldStageBeginRsp_CmdId.CMD_ID);
    
	session.send(rsp);
};