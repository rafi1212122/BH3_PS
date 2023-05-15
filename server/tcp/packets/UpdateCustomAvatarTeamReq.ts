import { UpdateCustomAvatarTeamReq, UpdateCustomAvatarTeamRsp, UpdateCustomAvatarTeamRsp_CmdId, UpdateCustomAvatarTeamRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetAvatarTeamDataReq from "./GetAvatarTeamDataReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as UpdateCustomAvatarTeamReq
    
    const { user } = session.player
    
    if(data.team) {
        await user.updateCustomAvatarTeam(data.team).save()
    }

    await GetAvatarTeamDataReq(session, { ...packet, data: { } })

    const rsp = Packet.encode(UpdateCustomAvatarTeamRsp, {
        retcode: UpdateCustomAvatarTeamRsp_Retcode.SUCC
    }, UpdateCustomAvatarTeamRsp_CmdId.CMD_ID)
    
    session.send(rsp)
}