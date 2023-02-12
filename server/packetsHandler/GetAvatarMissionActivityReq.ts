import net from "net"
import { GetAvatarMissionActivityReq, GetAvatarMissionActivityRsp, GetAvatarMissionActivityRsp_CmdId, GetAvatarMissionActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAvatarMissionActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAvatarMissionActivityRsp_CmdId.CMD_ID, {
        retcode: GetAvatarMissionActivityRsp_Retcode.NOT_OPEN,
    } as GetAvatarMissionActivityRsp)
}