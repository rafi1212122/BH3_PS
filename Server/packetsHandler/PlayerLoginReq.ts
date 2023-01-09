import net from "net"
import logger from "../../util/logger"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"
import { AccountType, CGType, GetMpDataRsp, GetMpDataRsp_CmdId, GetMpDataRsp_OpType, GetMpDataRsp_Retcode, MpDataType, PlayerLoginReq, PlayerLoginRsp, PlayerLoginRsp_CmdId, PlayerLoginRsp_Retcode } from "../../BengHuai"

export default async (socket: net.Socket, packet: PlayerLoginReq, cmdId: number) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, PlayerLoginRsp_CmdId.CMD_ID, {
            retcode: PlayerLoginRsp_Retcode['FAIL'],
            msg: 'Login failed try restating the game'
        } as PlayerLoginRsp)
    }
    Packet.getInstance().serializeAndSend(socket, PlayerLoginRsp_CmdId.CMD_ID, {
        retcode: PlayerLoginRsp_Retcode['SUCC'],
        isFirstLogin: user.isFirstLogin,
        regionName: "BH_PS01",
        cgType: user?.isFirstLogin?CGType.CG_START:CGType.CG_SEVEN_CHAPTER,
        regionId: 248,
        accountType: AccountType.ACCOUNT_HOYOLAB,
        loginSessionToken: GameServer.getInstance().sessions.size,
        lastLogoutTime: 0,
        lastClientPacketId: 0
    } as PlayerLoginRsp)
    
    // await prisma.user.update({
    //     where: {
    //         uid: user.uid
    //     },
    //     data: {
    //         isFirstLogin: false
    //     }
    // })
    
    Packet.getInstance().serializeAndSend(socket, GetMpDataRsp_CmdId.CMD_ID, {
        retcode: GetMpDataRsp_Retcode.SUCC,
        dataType: MpDataType.MP_DATA_PUNISH_TIME,
        opType: GetMpDataRsp_OpType.UPDATE_DATA,
        punishEndTime: 0
    } as GetMpDataRsp)
}