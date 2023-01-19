import net from "net"
import { GetMasterPupilApplyReq, GetMasterPupilApplyRsp, GetMasterPupilApplyRsp_CmdId, MasterPupilRetcode_Retcode, MasterPupilType } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMasterPupilApplyReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMasterPupilApplyRsp_CmdId.CMD_ID, {
        retcode: packet.type===MasterPupilType.MASTER_PUPIL_MASTER_TYPE?MasterPupilRetcode_Retcode.SUCC:MasterPupilRetcode_Retcode.FAIL,
        type: packet.type,
    } as GetMasterPupilApplyRsp)
}