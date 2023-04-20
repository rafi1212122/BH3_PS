import net from "net"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { AccountType, CGType, GetMpDataRsp, GetMpDataRsp_CmdId, GetMpDataRsp_OpType, GetMpDataRsp_Retcode, MpDataType, PlayerCardType, PlayerLoginReq, PlayerLoginRsp, PlayerLoginRsp_CmdId, PlayerLoginRsp_Retcode } from "../../BengHuai"
import config from "../../config"
import Avatar, { assignAvatar } from "../../mongodb/Model/Avatar"

export default async (socket: net.Socket, packet: PlayerLoginReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, PlayerLoginRsp_CmdId.CMD_ID, {
            retcode: PlayerLoginRsp_Retcode['FAIL'],
            msg: 'Login failed try restating the game'
        } as PlayerLoginRsp)
    }

    if(user.isFirstLogin&&!(await Avatar.find({
        userUid: user.uid
    }).toArray()).length){
        await assignAvatar(101, user.uid)
    }

    session.avatars = await Avatar.find({
        userUid: user.uid
    }).toArray()

    Packet.getInstance().serializeAndSend(socket, PlayerLoginRsp_CmdId.CMD_ID, {
        retcode: PlayerLoginRsp_Retcode['SUCC'],
        regionName: config.regionName,
        cgType: user.isFirstLogin?CGType.CG_START:CGType.CG_SEVEN_CHAPTER,
        regionId: 248,
        isFirstLogin: user.isFirstLogin,
        loginSessionToken: GameServer.getInstance().sessions.size,
        lastLogoutTime: 0,
        lastClientPacketId: 0
    } as PlayerLoginRsp)
    
    Packet.getInstance().serializeAndSend(socket, GetMpDataRsp_CmdId.CMD_ID, {
        retcode: GetMpDataRsp_Retcode.SUCC,
        dataType: MpDataType.MP_DATA_PUNISH_TIME,
        opType: GetMpDataRsp_OpType.UPDATE_DATA,
        punishEndTime: 0
    } as GetMpDataRsp)
}