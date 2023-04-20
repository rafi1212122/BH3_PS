import net from "net"
import { GetCustomHeadDataReq, GetCustomHeadDataRsp, GetCustomHeadDataRsp_CmdId, GetCustomHeadDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCustomHeadDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetCustomHeadDataRsp_CmdId.CMD_ID, {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: [
            {
                id: 161001
            }
        ]
    } as GetCustomHeadDataRsp)
}