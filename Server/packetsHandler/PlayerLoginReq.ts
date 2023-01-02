import net from "net"
import logger from "../../util/logger"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"
import { AccountType, CGType, PlayerLoginReq, PlayerLoginRsp, PlayerLoginRsp_Retcode } from "../../BengHuai"

export default async (socket: net.Socket, packet: PlayerLoginReq, cmdId: number) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
            retcode: PlayerLoginRsp_Retcode['FAIL'],
            msg: 'Login failed try restating the game'
        } as PlayerLoginRsp)
        return socket.write(reply, (err) => {
            if(err) return console.log('socket.write error', err)
            logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
        })
    }
    reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
        retcode: PlayerLoginRsp_Retcode['SUCC'],
        isFirstLogin: user.isFirstLogin,
        regionName: "BH_PS01",
        cgType: user?.isFirstLogin?CGType.CG_START:CGType.CG_SEVEN_CHAPTER,
        regionId: 248,
        accountType: AccountType.ACCOUNT_HOYOLAB,
        loginSessionToken: GameServer.getInstance().sessions.size
    } as PlayerLoginRsp)
    await prisma.user.update({
        where: {
            uid: user.uid
        },
        data: {
            isFirstLogin: false
        }
    })
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
    
}