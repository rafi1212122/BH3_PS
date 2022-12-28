import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"
import { CGType, PlayerLoginReq, PlayerLoginRsp, PlayerLoginRsp_Retcode } from "../../BengHuai"

export default async (socket: net.Socket, packet: PlayerLoginReq) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
            retcode: PlayerLoginRsp_Retcode['FAIL'],
            msg: 'Login failed try restating the game'
        } as PlayerLoginRsp)
        return socket.write(reply)
    }
    await prisma.user.update({
        where: {
            uid: user.uid
        },
        data: {
            isFirstLogin: false
        }
    })
    reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
        retcode: PlayerLoginRsp_Retcode['SUCC'],
        regionName: "ps01",
        regionId: 246,
        cgType: user?.isFirstLogin?CGType.CG_START:CGType.CG_SEVEN_CHAPTER,
        loginSessionToken: (Math.random() * (100000 - 1 + 1) ) << 0
    } as PlayerLoginRsp)
    socket.write(reply)
    
}