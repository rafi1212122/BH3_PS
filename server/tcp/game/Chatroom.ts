import { ChatMsg, ChatMsg_MsgChannel, RecvChatMsgNotify, RecvChatMsgNotify_CmdId } from "../../../resources/proto/BengHuai"
import { unixInSeconds } from "../../../utils"
import Packet from "../Packet"
import Session from "../Session"

export default class Chatroom {
    private static instance: Chatroom
    public readonly sessions: Session[] = []

    public static getInstance(): Chatroom {
        return this.instance ??= new Chatroom()
    }

    public constructor() { }

    public onSendChatMsg(session: Session, chatMsg: ChatMsg) {
        chatMsg = {
            ...chatMsg,
            uid: session.player.user.uid,
            nickname: session.player.user.nick,
            time: unixInSeconds,
            msg: chatMsg.content?.items?.find(i => i.msgStr)?.msgStr,
            avatarId: session.player.user.assistantAvatarId,
            dressId: session.player.avatars.find(av => av.avatarId === session.player.user.assistantAvatarId)?.dressId,
            channel: ChatMsg_MsgChannel.WORLD,
            frameId: 200001,
            customHeadId: 161001,
            checkResult: {
                shieldType: 0,
                numberCheck: 0,
                rewriteText: chatMsg.content?.items?.find(i => i.msgStr)?.msgStr
            }
        }

        for (const session of this.sessions) {
            session.send(Packet.encode(RecvChatMsgNotify, { chatMsgList: [ chatMsg ] }, RecvChatMsgNotify_CmdId.CMD_ID))
        }
    }
}