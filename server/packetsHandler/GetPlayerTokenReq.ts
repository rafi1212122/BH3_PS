import net from "net"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { AccountType, GetPlayerTokenReq, GetPlayerTokenRsp_Retcode, GetPlayerTokenRsp, GetPlayerTokenRsp_CmdId } from "../../BengHuai"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: GetPlayerTokenReq) => {
    let reply;
    const user = await User.findOne({
        uid: parseInt(packet.accountUid||"0")
    })
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    if(session&&user){
        session.user = user
    }
    if(!user||packet.accountToken!==user.token){
        return Packet.getInstance().serializeAndSend(socket, GetPlayerTokenRsp_CmdId.CMD_ID, {
            retcode: GetPlayerTokenRsp_Retcode['ACCOUNT_VERIFY_ERROR'],
            msg: "Invalid account!"
        } as GetPlayerTokenRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetPlayerTokenRsp_CmdId.CMD_ID, {
        retcode: GetPlayerTokenRsp_Retcode['SUCC'],
        uid: user?.uid,
        token: user?.token,
        accountType: AccountType['ACCOUNT_HOYOLAB'],
        accountUid: packet.accountUid,
        userType: 4,
        fightserverIp: 610967767,
        fightserverPort: 596766408,
        hoyolabAccountUid: packet.accountUid
    } as GetPlayerTokenRsp)
    
}