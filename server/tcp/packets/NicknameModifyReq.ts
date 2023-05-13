import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, NicknameModifyReq, NicknameModifyRsp, NicknameModifyRsp_CmdId, NicknameModifyRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetMainDataReq from "./GetMainDataReq";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as NicknameModifyReq
    const { user } = session.player
    user.$set('nick', data.nickname)
    await user.save()

    const rsp = Packet.encode(NicknameModifyRsp, {
        retcode: NicknameModifyRsp_Retcode.SUCC
    }, NicknameModifyRsp_CmdId.CMD_ID)
    
    await GetMainDataReq(session, { ...packet, data: { } })
    session.send(rsp)
}