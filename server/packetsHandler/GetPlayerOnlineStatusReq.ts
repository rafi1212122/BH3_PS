import net from "net"
import { GetPlayerOnlineStatusReq, GetPlayerOnlineStatusRsp, GetPlayerOnlineStatusRsp_CmdId, GetPlayerOnlineStatusRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import getTs from '../../util/getTs'
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPlayerOnlineStatusReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetPlayerOnlineStatusRsp_CmdId.CMD_ID, {
            retcode: GetPlayerOnlineStatusRsp_Retcode['FAIL'],
        } as GetPlayerOnlineStatusRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetPlayerOnlineStatusRsp_CmdId.CMD_ID, {
        retcode: GetPlayerOnlineStatusRsp_Retcode.SUCC,
        onlineStatusList: packet.uidList.map((uid)=> {
            return uid==user.uid?{
                uid,
                lastLoginTime: parseInt(getTs()),
                lastLogoutTime: parseInt(getTs()),
                onlineStatus: 3
            }:{
                uid,
                lastLoginTime: 0,
                lastLogoutTime: 0,
                onlineStatus: 1
            }
        })
    } as GetPlayerOnlineStatusRsp)
}