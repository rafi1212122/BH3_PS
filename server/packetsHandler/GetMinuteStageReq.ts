import net from "net"
import { GetMinuteStageReq, GetMinuteStageRsp, GetMinuteStageRsp_CmdId, GetMinuteStageRsp_Retcode, MinuteStage_StageState } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMinuteStageReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMinuteStageRsp_CmdId.CMD_ID, {
        retcode: GetMinuteStageRsp_Retcode.SUCC,
        isOpen: true,
        stageList: [
            {
                minuteId: 1,
                state: MinuteStage_StageState.UNLOCK
            }
        ]
    } as GetMinuteStageRsp)
}