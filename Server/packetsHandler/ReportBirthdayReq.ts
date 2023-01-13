import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, ReportBirthdayReq, ReportBirthdayRsp, ReportBirthdayRsp_CmdId, ReportBirthdayRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: ReportBirthdayReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, ReportBirthdayRsp_CmdId.CMD_ID, {
            retcode: ReportBirthdayRsp_Retcode['ACCOUNT_ERROR'],
        } as ReportBirthdayRsp)
    }
    session.user = await prisma.user.update({
        include: {
          avatars: true,
        },
        where: {
            uid: user.uid
        },
        data: {
            birthDate: packet.birthday
        }
    })
    
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        birthday: session.user.birthDate
    } as GetMainDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, ReportBirthdayRsp_CmdId.CMD_ID, {
        retcode: ReportBirthdayRsp_Retcode.SUCC,
    } as ReportBirthdayRsp)
}