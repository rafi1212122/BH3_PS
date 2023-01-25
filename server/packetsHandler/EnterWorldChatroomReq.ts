import net from "net"
import { ActivityWorldChatroomType, ChatMsg_MsgChannel, EnterWorldChatroomReq, EnterWorldChatroomRsp, EnterWorldChatroomRsp_CmdId, EnterWorldChatroomRsp_Retcode, MasterPupilType, RecvChatMsgNotify, RecvChatMsgNotify_CmdId } from "../../BengHuai"
import Packet from "../Packet"
import getTs from '../../util/getTs'
import config from "../../config"
import GameServer from "../GameServer"

export default (socket: net.Socket, packet: EnterWorldChatroomReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    if(!session) return
    if(session?.chatroom===packet.chatroomId) return
    Packet.getInstance().serializeAndSend(socket, EnterWorldChatroomRsp_CmdId.CMD_ID, {
        retcode: EnterWorldChatroomRsp_Retcode.SUCC,
        chatroomId: packet.chatroomId,
        activityType: ActivityWorldChatroomType.ACTIVITY_WORLD_CHATROOM_TYPE_NONE,
        playerNum: 2
    } as EnterWorldChatroomRsp)

    Packet.getInstance().serializeAndSend(socket, RecvChatMsgNotify_CmdId.CMD_ID, {
        chatMsgList: [{
            uid: 0,
            nickname: "Ai-chan",
            avatarId: 2401,
            dressId: 50153,
            channel: ChatMsg_MsgChannel.WORLD,
            frameId: 200001,
            time: parseInt(getTs()),
            msg: `Welcome to ${config.regionName}`,
            content: {
                items: [
                    {
                        msgStr: `Welcome to ${config.regionName}`
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
                rewriteText: `Welcome to ${config.regionName}`
            }
        }]
    } as RecvChatMsgNotify)
    session.chatroom = packet.chatroomId
}