import net from "net"
import logger from "../../util/logger"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"
import { AccountType, GetPlayerTokenReq, GetPlayerTokenRsp_Retcode, GetPlayerTokenRsp } from "../../BengHuai"

export default async (socket: net.Socket, packet: GetPlayerTokenReq, cmdId: number) => {
    let reply;
    const user = await prisma?.user.findFirst({
        where: {
            uid: parseInt(packet.accountUid||"0")
        }
    })
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    if(session!==undefined&&user){
        session.user = user
    }
    if(!user||packet.accountToken!==user.token){
        reply = Packet.getInstance().serialize(CmdId['GetPlayerTokenRsp'], {
            retcode: GetPlayerTokenRsp_Retcode['ACCOUNT_VERIFY_ERROR'],
            msg: "Invalid account!"
        } as GetPlayerTokenRsp)
    }
    reply = Packet.getInstance().serialize(CmdId['GetPlayerTokenRsp'], {
        retcode: GetPlayerTokenRsp_Retcode['SUCC'],
        uid: user?.uid,
        token: user?.token,
        accountType: AccountType['ACCOUNT_HOYOLAB'],
        accountUid: packet.accountUid,
        userType: 3,
        hoyolabAccountUid: packet.accountUid
    } as GetPlayerTokenRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
    
}