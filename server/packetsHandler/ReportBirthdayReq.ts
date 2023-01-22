import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, ReportBirthdayReq, ReportBirthdayRsp, ReportBirthdayRsp_CmdId, ReportBirthdayRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import User from "../../mongodb/Model/User"

export default async (socket: net.Socket, packet: ReportBirthdayReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, ReportBirthdayRsp_CmdId.CMD_ID, {
            retcode: ReportBirthdayRsp_Retcode['ACCOUNT_ERROR'],
        } as ReportBirthdayRsp)
    }
    const updateUser = await User.findOneAndUpdate({
        uid: user.uid
    }, {
        $set: { birthDate: packet.birthday }
    }, {
        returnDocument: "after"
    })

    if(!updateUser.value) return Packet.getInstance().serializeAndSend(socket, ReportBirthdayRsp_CmdId.CMD_ID, {
        retcode: ReportBirthdayRsp_Retcode['ACCOUNT_ERROR'],
    } as ReportBirthdayRsp)
    
    session.user = updateUser.value
    
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        birthday: session.user.birthDate
    } as GetMainDataRsp)
    
    Packet.getInstance().serializeAndSend(socket, ReportBirthdayRsp_CmdId.CMD_ID, {
        retcode: ReportBirthdayRsp_Retcode.SUCC,
    } as ReportBirthdayRsp)
}