import { GetAvatarTeamDataRsp, GetAvatarTeamDataRsp_CmdId, GetAvatarTeamDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetAvatarTeamDataRsp, {
        retcode: GetAvatarTeamDataRsp_Retcode.SUCC,
        avatarTeamList: [
            {
                avatarIdList: [101],
                stageType: 1
            }
        ]
    }, GetAvatarTeamDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}