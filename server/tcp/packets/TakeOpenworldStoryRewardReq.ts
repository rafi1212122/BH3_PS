import { TakeOpenworldStoryRewardReq, TakeOpenworldStoryRewardRsp, TakeOpenworldStoryRewardRsp_CmdId, TakeOpenworldStoryRewardRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetOpenworldStoryReq from "./GetOpenworldStoryReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as TakeOpenworldStoryRewardReq
    const { openworldStories } = session.player

    const story = openworldStories.find(ow => ow.storyId === data.storyId)
    
    if(!story) {
        return session.send(Packet.encode(TakeOpenworldStoryRewardRsp, {
            retcode: TakeOpenworldStoryRewardRsp_Retcode.STORY_NOT_FOUND
        }, TakeOpenworldStoryRewardRsp_CmdId.CMD_ID))
    }
    
    await story.finish().save()

    const rsp = Packet.encode(TakeOpenworldStoryRewardRsp, {
        retcode: TakeOpenworldStoryRewardRsp_Retcode.SUCC,
        storyId: data.storyId
    }, TakeOpenworldStoryRewardRsp_CmdId.CMD_ID)

    session.send(rsp)
    await GetOpenworldStoryReq(session, { ...packet, data: { } })
}