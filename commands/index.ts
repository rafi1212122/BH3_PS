import { Socket } from "net";
import { ChatMsg_MsgChannel, MasterPupilType, RecvChatMsgNotify, RecvChatMsgNotify_CmdId } from "../BengHuai";
import Packet from "../server/Packet";
import getTs from '../util/getTs'

export default async (args: string[], socket: Socket) => {
    await import(`./${args[0].toLowerCase()}`).then(async r => {
        await r.default(socket, args);
    }).catch(() => {
        Packet.getInstance().serializeAndSend(socket, RecvChatMsgNotify_CmdId.CMD_ID, {
            chatMsgList: [{
                uid: 0,
                nickname: "Ai-chan",
                avatarId: 2401,
                dressId: 50153,
                channel: ChatMsg_MsgChannel.WORLD,
                frameId: 200001,
                time: parseInt(getTs()),
                msg: "Invalid command!",
                content: {
                    items: [
                        {
                            msgStr: "Invalid command!"
                        }
                    ]
                },
                isGoback: false,
                customHeadId: 162188,
                masterPupilTag: MasterPupilType.MASTER_PUPIL_NONE_TYPE,
                isArmadaLeader: false,
                isTeamLeader: false,
                checkResult: {
                    shieldType: 0,
                    numberCheck: 0,
                    rewriteText: "Invalid command!"
                }
            }]
        } as RecvChatMsgNotify)
    })
}