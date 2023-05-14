import { SetOpenworldStoryProgressReq, SetOpenworldStoryProgressRsp, SetOpenworldStoryProgressRsp_CmdId, SetOpenworldStoryProgressRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetOpenworldStoryReq from "./GetOpenworldStoryReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as SetOpenworldStoryProgressReq
    const { user } = session.player
    
    if(!data.storyId) {
        return session.send(Packet.encode(SetOpenworldStoryProgressRsp, {
            retcode: SetOpenworldStoryProgressRsp_Retcode.STORY_NOT_FOUND
        }, SetOpenworldStoryProgressRsp_CmdId.CMD_ID))
    }
    
    await user.setStory(data.storyId, data.storyProgress)

    const rsp = Packet.encode(SetOpenworldStoryProgressRsp, {
        retcode: SetOpenworldStoryProgressRsp_Retcode.SUCC,
        storyId: data.storyId
    }, SetOpenworldStoryProgressRsp_CmdId.CMD_ID)

    session.send(rsp)
    await GetOpenworldStoryReq(session, { ...packet, data: { } })
}