import net from "net"
import { GetStageDropDisplayReq, GetStageDropDisplayRsp, GetStageDropDisplayRsp_CmdId, GetStageDropDisplayRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetStageDropDisplayReq) => {
    Packet.getInstance().serializeAndSend(socket, GetStageDropDisplayRsp_CmdId.CMD_ID, {
        retcode: GetStageDropDisplayRsp_Retcode.SUCC,
        stageDropList: packet.stageIdList.map((stageId) => {
            return {
                stageId
            }
        })
    } as GetStageDropDisplayRsp)
}