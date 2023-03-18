import net from "net"
import { GetWarshipTrialDataReq, GetWarshipTrialDataRsp, GetWarshipTrialDataRsp_CmdId, GetWarshipTrialDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWarshipTrialDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWarshipTrialDataRsp_CmdId.CMD_ID, {
        retcode: GetWarshipTrialDataRsp_Retcode.SUCC,
        trialWarshipList: [
            {
                sampleId: 410002,
                endTime: 3380724800
            }
        ],
        isAll: true
    } as GetWarshipTrialDataRsp)
}