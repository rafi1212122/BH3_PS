import { GetMainDataRsp, GetMainDataRsp_CmdId, UpdateAssistantAvatarIdReq, UpdateAssistantAvatarIdRsp, UpdateAssistantAvatarIdRsp_CmdId, UpdateAssistantAvatarIdRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetMainDataReq from "./GetMainDataReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as UpdateAssistantAvatarIdReq
    const { user } = session.player

    if(data.avatarId) {
        user.$set('assistantAvatarId', data.avatarId)
        await user.save()
    }

    const rsp = Packet.encode(UpdateAssistantAvatarIdRsp, {
        retcode: UpdateAssistantAvatarIdRsp_Retcode.SUCC
    }, UpdateAssistantAvatarIdRsp_CmdId.CMD_ID)

    await GetMainDataReq(session, { ...packet, data: {} })
    session.send(rsp)
}