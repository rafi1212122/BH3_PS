import net from "net"
import { GetFrameDataReq, GetFrameDataRsp, GetFrameDataRsp_CmdId, GetFrameDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetFrameDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetFrameDataRsp_CmdId.CMD_ID, {
        retcode: GetFrameDataRsp_Retcode.SUCC,
        isAll: true,
        frameList: [
            {
                "id": 200001
            }
        ]
    } as GetFrameDataRsp)
}