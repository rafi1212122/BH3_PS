import net from "net"
import { TakeOpenworldCycleFinishRewardReq, TakeOpenworldCycleFinishRewardRsp, TakeOpenworldCycleFinishRewardRsp_CmdId, TakeOpenworldCycleFinishRewardRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default async (socket: net.Socket, packet: TakeOpenworldCycleFinishRewardReq) => {
    Packet.getInstance().serializeAndSend(socket, TakeOpenworldCycleFinishRewardRsp_CmdId.CMD_ID, {
        retcode: TakeOpenworldCycleFinishRewardRsp_Retcode.SUCC,
        cycle: packet.cycle,
        mapId: packet.mapId
    } as TakeOpenworldCycleFinishRewardRsp)
}