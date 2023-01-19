import net from "net"
import { GetAvatarRollDataReq, GetAvatarRollDataRsp, GetAvatarRollDataRsp_CmdId, GetAvatarRollDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAvatarRollDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAvatarRollDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarRollDataRsp_Retcode.SUCC,
        rollList: [
            {
                avatarId: 101,
                progress: 0,
                isUnlock: true
            }
        ],
        isAll: true
    } as GetAvatarRollDataRsp)
}