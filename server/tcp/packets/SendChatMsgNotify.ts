import { SendChatMsgNotify } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import Chatroom from "../game/Chatroom";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as SendChatMsgNotify

    Chatroom.getInstance().onSendChatMsg(session, data.chatMsg || {})
}