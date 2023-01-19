import net from "net"
import { DormDataType, ArmadaMatrixGetScheduleReq, ArmadaMatrixGetScheduleRsp, ArmadaMatrixGetScheduleRsp_CmdId, ArmadaMatrixRetcode_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: ArmadaMatrixGetScheduleReq) => {
    Packet.getInstance().serializeAndSend(socket, ArmadaMatrixGetScheduleRsp_CmdId.CMD_ID, {
        retcode: ArmadaMatrixRetcode_Retcode.FAIL
    } as ArmadaMatrixGetScheduleRsp)
}