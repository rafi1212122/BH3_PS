import net from "net"
import { GetMpDataReq, GetMpDataRsp, GetMpDataRsp_CmdId, GetMpDataRsp_OpType, GetMpDataRsp_Retcode, MpDataType } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMpDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    Packet.getInstance().serializeAndSend(socket, GetMpDataRsp_CmdId.CMD_ID, {
        retcode: GetMpDataRsp_Retcode.SUCC,
        dataType: MpDataType.MP_DATA_ALL,
        opType: GetMpDataRsp_OpType.INIT_DATA,
        mpLevel: 0,
        mpExp: 0,
        teamAvatarId: user?.assistantAvatarId,
        punishEndTime: 0
    } as GetMpDataRsp)
}