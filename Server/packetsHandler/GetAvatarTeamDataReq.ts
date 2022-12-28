import net from "net"
import { GetAvatarTeamDataReq, GetAvatarTeamDataRsp, GetAvatarTeamDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAvatarTeamDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetAvatarTeamDataRsp'], {
        retcode: GetAvatarTeamDataRsp_Retcode.SUCC,
        avatarTeamList: [
            {
                stageType: 1,
                avatarIdList: [ 101 ]
            }
        ],
        customAvatarTeamList: []
    } as GetAvatarTeamDataRsp)
    socket.write(reply)
}