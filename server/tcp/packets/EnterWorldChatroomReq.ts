import { ActivityWorldChatroomType, EnterWorldChatroomReq, EnterWorldChatroomRsp, EnterWorldChatroomRsp_CmdId, EnterWorldChatroomRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import Chatroom from "../game/Chatroom";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as EnterWorldChatroomReq

    let rsp: Packet
    
    const { sessions }  = Chatroom.getInstance()
    if(!sessions.includes(session)) {
        sessions.push(session);
        rsp = Packet.encode(EnterWorldChatroomRsp, {
            retcode: EnterWorldChatroomRsp_Retcode.CHATROOM_ID_ERROR,
            activityType: ActivityWorldChatroomType.ACTIVITY_WORLD_CHATROOM_TYPE_NONE
        }, EnterWorldChatroomRsp_CmdId.CMD_ID)
    }

    rsp = Packet.encode(EnterWorldChatroomRsp, {
        retcode: EnterWorldChatroomRsp_Retcode.SUCC,
        chatroomId: 1,
        activityType: ActivityWorldChatroomType.ACTIVITY_WORLD_CHATROOM_TYPE_NONE,
        playerNum: sessions.length
    }, EnterWorldChatroomRsp_CmdId.CMD_ID)

    session.send(rsp)
}