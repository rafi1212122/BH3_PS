import net from "net"
import { SetOpenworldStoryProgressReq, SetOpenworldStoryProgressRsp, SetOpenworldStoryProgressRsp_CmdId, SetOpenworldStoryProgressRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { setStory } from "../../mongodb/Model/OpenworldStory"
import GameServer from "../GameServer"
import GetOpenworldStoryReq from "./GetOpenworldStoryReq"

export default async (socket: net.Socket, packet: SetOpenworldStoryProgressReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    if(user){
        await setStory(user?.uid, packet.storyId, packet.storyProgress)
    }

    Packet.getInstance().serializeAndSend(socket, SetOpenworldStoryProgressRsp_CmdId.CMD_ID, {
        retcode: SetOpenworldStoryProgressRsp_Retcode.SUCC,
        storyId: packet.storyId
    } as SetOpenworldStoryProgressRsp)

    GetOpenworldStoryReq(socket, {})
}