import net from "net"
import { GetWarshipDataReq, GetWarshipDataRsp, GetWarshipDataRsp_CmdId, GetWarshipDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWarshipDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWarshipDataRsp_CmdId.CMD_ID, {
        retcode: GetWarshipDataRsp_Retcode.SUCC,
        warshipList: [
            {
                warshipId: 400004,
            }
        ],
        isAll: true
    } as GetWarshipDataRsp)
}