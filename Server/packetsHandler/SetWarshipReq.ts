import net from "net"
import { SetWarshipReq, SetWarshipRsp, SetWarshipRsp_CmdId, SetWarshipRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'

export default async (socket: net.Socket, packet: SetWarshipReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, SetWarshipRsp_CmdId.CMD_ID, {
            retcode: SetWarshipRsp_Retcode.FAIL,
        } as SetWarshipRsp)
    }
    session.user = await prisma.user.update({
        where: {
            uid: user.uid
        },
        data: {
            warshipId: packet.warshipId
        }
    })
    Packet.getInstance().serializeAndSend(socket, SetWarshipRsp_CmdId.CMD_ID, {
        retcode: SetWarshipRsp_Retcode.SUCC,
    } as SetWarshipRsp)
}