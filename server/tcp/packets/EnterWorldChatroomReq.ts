import { EnterWorldChatroomReq, EnterWorldChatroomRsp, EnterWorldChatroomRsp_CmdId, EnterWorldChatroomRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import Chatroom from "../game/Chatroom";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as EnterWorldChatroomReq
    
    const { sessions }  = Chatroom.getInstance()
    if(!sessions.includes(session)) {
        sessions.push(session);
    }

    const rsp = Packet.encode(EnterWorldChatroomRsp, {
        retcode: EnterWorldChatroomRsp_Retcode.SUCC,
        chatroomId: 1
    }, EnterWorldChatroomRsp_CmdId.CMD_ID)

    session.send(rsp)
}