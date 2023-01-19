import net from "net"
import { ArmadaPlayerStatus, GetArmadaDataReq, GetArmadaDataRsp, GetArmadaDataRsp_CmdId, GetArmadaDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetArmadaDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetArmadaDataRsp_CmdId.CMD_ID, {
        retcode: GetArmadaDataRsp_Retcode.SUCC,
        status: ArmadaPlayerStatus.ARMADA_PLAYER_NOT_JOIN
    } as GetArmadaDataRsp)
}