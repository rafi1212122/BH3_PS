import net from "net"
import { SetWarshipAvatarReq, SetWarshipAvatarRsp, SetWarshipAvatarRsp_CmdId, SetWarshipAvatarRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: SetWarshipAvatarReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, SetWarshipAvatarRsp_CmdId.CMD_ID, {
            retcode: SetWarshipAvatarRsp_Retcode['FAIL'],
        } as SetWarshipAvatarRsp)
    }
    session.user = await prisma.user.update({
        where: {
            uid: user.uid,
        },
        data: {
            warshipFirstAvatarId: packet.firstAvatarId
        }
    })
    Packet.getInstance().serializeAndSend(socket, SetWarshipAvatarRsp_CmdId.CMD_ID, {
        retcode: SetWarshipAvatarRsp_Retcode.SUCC,
    } as SetWarshipAvatarRsp)
}