import net from "net"
import { GetTrialAvatarReq, GetTrialAvatarRsp, GetTrialAvatarRsp_CmdId, GetTrialAvatarRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetTrialAvatarReq) => {
    Packet.getInstance().serializeAndSend(socket, GetTrialAvatarRsp_CmdId.CMD_ID, {
        retcode: GetTrialAvatarRsp_Retcode.SUCC,
        isAllUpdate: true
    } as GetTrialAvatarRsp)
}