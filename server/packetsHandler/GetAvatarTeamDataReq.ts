import net from "net"
import { GetAvatarTeamDataReq, GetAvatarTeamDataRsp, GetAvatarTeamDataRsp_CmdId, GetAvatarTeamDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAvatarTeamDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAvatarTeamDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarTeamDataRsp_Retcode.SUCC,
        avatarTeamList: [
            {
                stageType: 1,
                avatarIdList: [
                    101,
                ]
            }
        ],
    } as GetAvatarTeamDataRsp)
}