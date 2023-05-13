import { UpdateAvatarTeamNotify } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as UpdateAvatarTeamNotify
    const { user } = session.player
    
    if(data.team) {
        await user.updateAvatarTeam(data.team).save()
    }
}