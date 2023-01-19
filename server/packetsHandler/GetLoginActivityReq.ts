import net from "net"
import logger from "../../util/logger"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { GetLoginActivityReq, GetLoginActivityRsp, GetLoginActivityRsp_CmdId, GetLoginActivityRsp_Retcode } from "../../BengHuai"

export default async (socket: net.Socket, packet: GetLoginActivityReq) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetLoginActivityRsp_CmdId.CMD_ID, {
            retcode: GetLoginActivityRsp_Retcode['FAIL'],
        } as GetLoginActivityRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetLoginActivityRsp_CmdId.CMD_ID, {
        retcode: GetLoginActivityRsp_Retcode['SUCC'],
        loginList: [
            {
                id: 69,
                loginDays: 1,
                acceptTime: parseInt(getTs()) - 10000,
                durationEndTime: parseInt(getTs()) + 1000000,
            }
        ]
    } as GetLoginActivityRsp)
    
}