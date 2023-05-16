import { UrgencyMsgNotify, UrgencyMsgNotify_CmdId } from "../../resources/proto/BengHuai";
import Gameserver from "../tcp/Gameserver";
import Packet from "../tcp/Packet";

export default async () => {
    // disabled for now, should make command authorization level first
    
    // for (const session of Gameserver.getInstance().sessions.values()) {
    //     session.send(Packet.encode(UrgencyMsgNotify, { msg: "PING!" }, UrgencyMsgNotify_CmdId.CMD_ID))
    // }
}