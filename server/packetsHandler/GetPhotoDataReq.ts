import net from "net"
import { GetPhotoDataReq, GetPhotoDataRsp, GetPhotoDataRsp_CmdId, GetPhotoDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPhotoDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetPhotoDataRsp_CmdId.CMD_ID, {
        retcode: GetPhotoDataRsp_Retcode.SUCC,
        type: packet.type
    } as GetPhotoDataRsp)
}