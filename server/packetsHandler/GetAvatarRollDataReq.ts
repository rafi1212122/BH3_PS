import net from "net"
import { GetAvatarRollDataReq, GetAvatarRollDataRsp, GetAvatarRollDataRsp_CmdId, GetAvatarRollDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"

export default (socket: net.Socket, packet: GetAvatarRollDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)

    Packet.getInstance().serializeAndSend(socket, GetAvatarRollDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarRollDataRsp_Retcode.SUCC,
        rollList: session?.avatars.map(avatar=> ({
            avatarId: avatar.avatarId,
            isUnlock: true,
            progress: 0
        })),
        isAll: true
    } as GetAvatarRollDataRsp)
}