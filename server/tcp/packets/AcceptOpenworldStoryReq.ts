import { AcceptOpenworldStoryReq, AcceptOpenworldStoryRsp, AcceptOpenworldStoryRsp_CmdId, AcceptOpenworldStoryRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetOpenworldStoryReq from "./GetOpenworldStoryReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as AcceptOpenworldStoryReq
    const { user } = session.player
    
    if(!data.storyId) {
        return session.send(Packet.encode(AcceptOpenworldStoryRsp, {
            retcode: AcceptOpenworldStoryRsp_Retcode.CONDITION_NOT_MEET
        }, AcceptOpenworldStoryRsp_CmdId.CMD_ID))
    }
    
    await user.setStory(data.storyId)

    const rsp = Packet.encode(AcceptOpenworldStoryRsp, {
        retcode: AcceptOpenworldStoryRsp_Retcode.SUCC,
        storyId: data.storyId
    }, AcceptOpenworldStoryRsp_CmdId.CMD_ID)

    session.send(rsp)
    await GetOpenworldStoryReq(session, { ...packet, data: { } })
}