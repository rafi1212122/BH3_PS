import net from "net"
import { GetMasterPupilMainDataReq, GetMasterPupilMainDataRsp, GetMasterPupilMainDataRsp_CmdId, MasterPupilRetcode_Retcode, MasterPupilType } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMasterPupilMainDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMasterPupilMainDataRsp_CmdId.CMD_ID, {
        retcode: MasterPupilRetcode_Retcode.SUCC,
        type: MasterPupilType.MASTER_PUPIL_PUPIL_TYPE,
        pupil: {
            lastDismissTime: 0,
            curStepId: 0,
            leftAssistantTimes: 0,
            masterBrief: {}
        }
    } as GetMasterPupilMainDataRsp)
}