import net from "net"
import { GetOpenworldStoryReq, GetOpenworldStoryRsp, GetOpenworldStoryRsp_CmdId, GetOpenworldStoryRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { getAllStory } from "../../mongodb/Model/OpenworldStory"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: GetOpenworldStoryReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetOpenworldStoryRsp_CmdId.CMD_ID, {
            retcode: GetOpenworldStoryRsp_Retcode.FAIL
        } as GetOpenworldStoryRsp)    
    }

    const activeStories = (await getAllStory(user.uid)).filter(story=>!story.isFinished)
    const finishedStories = (await getAllStory(user.uid)).filter(story=>story.isFinished)

    Packet.getInstance().serializeAndSend(socket, GetOpenworldStoryRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldStoryRsp_Retcode.SUCC,
        curStoryList: activeStories.map(story=>({
            storyId: story.storyId,
            storyProgress: story.progress,
            acceptTime: story.acceptTime
        })),
        finishStoryIdList: finishedStories.map(s=>s.storyId),
        isAll: true,
    } as GetOpenworldStoryRsp)
}