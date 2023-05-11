import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, NicknameModifyReq, NicknameModifyRsp, NicknameModifyRsp_CmdId, NicknameModifyRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as NicknameModifyReq
    const { user } = session.player
    user.$set('nick', data.nickname)
    await user.save()

    const rsp = Packet.encode(NicknameModifyRsp, {
        retcode: NicknameModifyRsp_Retcode.SUCC
    }, NicknameModifyRsp_CmdId.CMD_ID)

    session.send(Packet.encode(GetMainDataRsp, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        nickname: data.nickname
    }, GetMainDataRsp_CmdId.CMD_ID), rsp)
}