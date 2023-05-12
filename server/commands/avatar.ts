import { isDocument } from "@typegoose/typegoose";
import { GetAvatarDataReq_CmdId } from "../../resources/proto/BengHuai";
import Packet from "../tcp/Packet";
import Session from "../tcp/Session";
import Player from "../tcp/game/Player";
import GetAvatarDataReq from "../tcp/packets/GetAvatarDataReq";

export default async (instance: Session | Player, ...args: string[]) => {
    let session: Session | undefined
    let player: Player

    if(instance instanceof Session) {
        session = instance
        player = instance.player
    }else { player = instance }
    
    const { user } = player
    
    const type = args[0]
    const avatarId = parseInt(args[1])

    switch(type) {
        case "add":
            if(isDocument(user.equipment)) {
                await user.addAvatar(avatarId, user.equipment)
                await player.repopulate()
            }else {
                throw "Server error!"
            }
            break;
        default: 
            throw "Bad command!"
    }

    await user.save()

    if(session) {
        GetAvatarDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetAvatarDataReq_CmdId.CMD_ID))
    }
}