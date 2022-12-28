import net from "net"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { GetLoginActivityReq, GetLoginActivityRsp, GetLoginActivityRsp_Retcode } from "../../BengHuai"

export default async (socket: net.Socket, packet: GetLoginActivityReq) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['GetLoginActivityRsp'], {
            retcode: GetLoginActivityRsp_Retcode['FAIL'],
        } as GetLoginActivityRsp)
        return socket.write(reply)
    }
    reply = Packet.getInstance().serialize(CmdId['GetLoginActivityRsp'], {
        retcode: GetLoginActivityRsp_Retcode['SUCC'],
        loginList: [
            {
                id: 69,
                loginDays: 0,
                acceptTime: parseInt(getTs()) - 10000,
                durationEndTime: parseInt(getTs()) + 1000000,
            }
        ]
    } as GetLoginActivityRsp)
    socket.write(reply)
    
}