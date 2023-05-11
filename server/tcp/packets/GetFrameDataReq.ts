import { GetFrameDataRsp, GetFrameDataRsp_CmdId, GetFrameDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetFrameDataRsp, {
        retcode: GetFrameDataRsp_Retcode.SUCC,
        isAll: true,
        frameList: [
            { id: 200001 }
        ]
    }, GetFrameDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}