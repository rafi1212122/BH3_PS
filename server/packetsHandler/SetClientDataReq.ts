import net from "net"
import { SetClientDataReq, SetClientDataRsp, SetClientDataRsp_CmdId, SetClientDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: SetClientDataReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(packet.clientData?.data&&user) {
        await prisma.clientData.upsert({
            where: {
                id: (await prisma.clientData.findFirst({
                    where: {
                        clientDataId: packet.clientData.id,
                        userUid: user.uid
                    }
                }))?.id
            },
            create: {
                clientDataId: packet.clientData.id,
                data: String(packet.clientData.data),
                user: {
                    connect: {
                        uid: user.uid
                    }
                }
            },
            update: {
                data: String(packet.clientData.data)
            }
        })
    }

    Packet.getInstance().serializeAndSend(socket, SetClientDataRsp_CmdId.CMD_ID, {
        retcode: SetClientDataRsp_Retcode.SUCC,
        type: packet.clientData?.type,
        id: packet.clientData?.id||0
    } as SetClientDataRsp)
}