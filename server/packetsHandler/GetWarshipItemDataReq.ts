import net from "net"
import { GetWarshipItemDataReq, GetWarshipItemDataRsp, GetWarshipItemDataRsp_CmdId, GetWarshipItemDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWarshipItemDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWarshipItemDataRsp_CmdId.CMD_ID, {
        retcode: GetWarshipItemDataRsp_Retcode.SUCC,
        warshipItemIdList: [
            400004,
            401005,
            401006,
            401998,
            401999
        ],
        isAll: true
    } as GetWarshipItemDataRsp)
}