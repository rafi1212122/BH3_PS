import { GetPhotoDataReq, GetPhotoDataRsp, GetPhotoDataRsp_CmdId, GetPhotoDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetPhotoDataReq

	const rsp = Packet.encode(GetPhotoDataRsp, {
        retcode: GetPhotoDataRsp_Retcode.SUCC,
        type: data.type
    }, GetPhotoDataRsp_CmdId.CMD_ID);
    
	session.send(rsp);
};