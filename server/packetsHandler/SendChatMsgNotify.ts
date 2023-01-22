import net from "net"
import { ChatMsg_MsgChannel, MasterPupilType, RecvChatMsgNotify, RecvChatMsgNotify_CmdId, SendChatMsgNotify } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"
import getTs from '../../util/getTs'
import commands from "../../commands"

export default async (socket: net.Socket, packet: SendChatMsgNotify) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return
    }

    Packet.getInstance().serializeAndSend(socket, RecvChatMsgNotify_CmdId.CMD_ID, {
        chatMsgList: [{
            uid: user.uid,
            nickname: user.nick,
            avatarId: user.assistantAvatarId,
            dressId: parseInt(`59${user.assistantAvatarId}`),
            channel: ChatMsg_MsgChannel.WORLD,
            frameId: 200006,
            time: parseInt(getTs()),
            msg: packet.chatMsg?.content?.items[0].msgStr,
            content: {
                items: [
                    {
                        msgStr: packet.chatMsg?.content?.items[0].msgStr
                    }
                ]
            },
            isGoback: false,
            customHeadId: 161069,
            masterPupilTag: MasterPupilType.MASTER_PUPIL_NONE_TYPE,
            isArmadaLeader: false,
            isTeamLeader: false,
            checkResult: {
                shieldType: 0,
                numberCheck: 0,
                rewriteText: packet.chatMsg?.content?.items[0].msgStr
            }
        }]
    } as RecvChatMsgNotify)

    if(!packet.chatMsg?.content?.items[0].msgStr) return
    
    commands(packet.chatMsg?.content?.items[0].msgStr.split(' '), socket)
}