import { OpenworldChapterGetDataReq, OpenworldChapterGetDataRsp, OpenworldChapterGetDataRsp_CmdId, OpenworldChapterGetDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as OpenworldChapterGetDataReq

	const rsp = Packet.encode(OpenworldChapterGetDataRsp, {
        retcode: OpenworldChapterGetDataRsp_Retcode.SUCC,
        chapterData: {
            mapId: data.mapId
        }
    }, OpenworldChapterGetDataRsp_CmdId.CMD_ID);
    
	session.send(rsp);
};