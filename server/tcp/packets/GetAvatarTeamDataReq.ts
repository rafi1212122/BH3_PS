import { GetAvatarTeamDataRsp, GetAvatarTeamDataRsp_CmdId, GetAvatarTeamDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player

    const rsp = Packet.encode(GetAvatarTeamDataRsp, {
        retcode: GetAvatarTeamDataRsp_Retcode.SUCC,
        avatarTeamList: user.avatarTeams || [{ avatarIdList: [101], stageType: 1 }],
        customAvatarTeamList: user.customAvatarTeams || []
    }, GetAvatarTeamDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}