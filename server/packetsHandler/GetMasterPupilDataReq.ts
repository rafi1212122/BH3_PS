import net from "net"
import { GetMasterPupilDataReq, GetMasterPupilDataRsp, GetMasterPupilDataRsp_CmdId, MasterPupilRetcode_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMasterPupilDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMasterPupilDataRsp_CmdId.CMD_ID, {
        retcode: MasterPupilRetcode_Retcode.SUCC,
        type: packet.type
    } as GetMasterPupilDataRsp)
}