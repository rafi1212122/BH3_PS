import net from "net"
import { TakeOpenworldStoryRewardReq, TakeOpenworldStoryRewardRsp, TakeOpenworldStoryRewardRsp_CmdId, TakeOpenworldStoryRewardRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { setStory } from "../../mongodb/Model/OpenworldStory"
import GameServer from "../GameServer"
import GetOpenworldStoryReq from "./GetOpenworldStoryReq"

export default async (socket: net.Socket, packet: TakeOpenworldStoryRewardReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    if(user){
        await setStory(user?.uid, packet.storyId, undefined, true)
    }

    Packet.getInstance().serializeAndSend(socket, TakeOpenworldStoryRewardRsp_CmdId.CMD_ID, {
        retcode: TakeOpenworldStoryRewardRsp_Retcode.SUCC,
        storyId: packet.storyId
    } as TakeOpenworldStoryRewardRsp)

    GetOpenworldStoryReq(socket, {})
}