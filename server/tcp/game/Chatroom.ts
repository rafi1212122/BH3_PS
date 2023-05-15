import { readdirSync } from "fs"
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

        const commands = readdirSync(__dirname + '/../../commands').map(c => c.replace('.ts', ""))
        let args = chatMsg.msg?.split(' ') || []
        const command = args.shift()
        
        if(command && commands.includes(command)) {
            session.send(Packet.encode(RecvChatMsgNotify, { chatMsgList: [chatMsg] }, RecvChatMsgNotify_CmdId.CMD_ID))

            import(__dirname + `/../../commands/${command}`).then(async r => {
                await r.default(session, ...args);
            }).catch(err => {
                Chatroom.getInstance().sendAiMsg(typeof err === 'string' ? err : "Command failed to execute!", session)
            }).finally(() => {
                Chatroom.getInstance().sendAiMsg("Command executed!", session)
            });
        }else {
            for (const session of this.sessions) {
                session.send(Packet.encode(RecvChatMsgNotify, { chatMsgList: [ chatMsg ] }, RecvChatMsgNotify_CmdId.CMD_ID))
            }
        }
    }

    public sendAiMsg(msg: string, session?: Session) {
        if(session) {
            return session.send(Packet.encode(RecvChatMsgNotify, { chatMsgList: [{
                uid: 0,
                nickname: "Ai-chan",
                time: unixInSeconds,
                msg: msg,
                avatarId: 3201,
                dressId: 593201,
                channel: ChatMsg_MsgChannel.WORLD,
                frameId: 200001,
                customHeadId: 161080,
                checkResult: {
                    shieldType: 0,
                    numberCheck: 0,
                    rewriteText: msg
                }
            }] }, RecvChatMsgNotify_CmdId.CMD_ID))
        }

        for (const session of this.sessions) {
            session.send(Packet.encode(RecvChatMsgNotify, { chatMsgList: [{
                uid: 0,
                nickname: "Ai-chan",
                time: unixInSeconds,
                msg: msg,
                avatarId: 3201,
                dressId: 593201,
                channel: ChatMsg_MsgChannel.WORLD,
                frameId: 200001,
                customHeadId: 161080,
                checkResult: {
                    shieldType: 0,
                    numberCheck: 0,
                    rewriteText: msg
                }
            }] }, RecvChatMsgNotify_CmdId.CMD_ID))
        }
    }
}