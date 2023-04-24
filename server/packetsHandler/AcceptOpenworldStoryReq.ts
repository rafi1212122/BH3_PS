import net from "net"
import { AcceptOpenworldStoryReq, AcceptOpenworldStoryRsp, AcceptOpenworldStoryRsp_CmdId, AcceptOpenworldStoryRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { setStory } from "../../mongodb/Model/OpenworldStory"
import GameServer from "../GameServer"
import GetOpenworldStoryReq from "./GetOpenworldStoryReq"

export default async (socket: net.Socket, packet: AcceptOpenworldStoryReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    if(user){
        await setStory(user?.uid, packet.storyId)
    }

    Packet.getInstance().serializeAndSend(socket, AcceptOpenworldStoryRsp_CmdId.CMD_ID, {
        retcode: AcceptOpenworldStoryRsp_Retcode.SUCC,
        storyId: packet.storyId
    } as AcceptOpenworldStoryRsp)

    GetOpenworldStoryReq(socket, {})
}