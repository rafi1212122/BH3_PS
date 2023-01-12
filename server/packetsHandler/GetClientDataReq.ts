import net from "net"
import { ClientDataType, GetClientDataReq, GetClientDataRsp, GetClientDataRsp_CmdId, GetClientDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: GetClientDataReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    const data = await prisma.clientData.findMany({
        where: {
            clientDataId: packet.id,
            userUid: user?.uid
        }
    })
    if(!data){
        return Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
            retcode: GetClientDataRsp_Retcode.NOT_FOUND,
            id: 0,
            type: packet.type
        } as GetClientDataRsp)
    }
    Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
        retcode: GetClientDataRsp_Retcode.SUCC,
        id: packet.id,
        type: packet.type,
        clientDataList: data.map((dat) => {
            return{
                id: dat.clientDataId,
                data: Buffer.from(dat.data),
                type: packet.type
            }
        })
    } as GetClientDataRsp)
}