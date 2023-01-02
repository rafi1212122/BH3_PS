import net from "net"
import logger from "../../util/logger"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { GetLoginActivityReq, GetLoginActivityRsp, GetLoginActivityRsp_Retcode } from "../../BengHuai"

export default async (socket: net.Socket, packet: GetLoginActivityReq, cmdId: number) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['GetLoginActivityRsp'], {
            retcode: GetLoginActivityRsp_Retcode['FAIL'],
        } as GetLoginActivityRsp)
        return socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
    }
    reply = Packet.getInstance().serialize(CmdId['GetLoginActivityRsp'], {
        retcode: GetLoginActivityRsp_Retcode['SUCC'],
        loginList: [
            {
                id: 69,
                loginDays: 2,
                hasTakeDaysRewardList: [ 1, 2 ],
                acceptTime: parseInt(getTs()) - 10000,
                durationEndTime: 0,
            }
        ]
    } as GetLoginActivityRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
    
}