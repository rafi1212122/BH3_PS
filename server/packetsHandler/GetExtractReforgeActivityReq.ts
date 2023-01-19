import net from "net"
import { GetExtractReforgeActivityReq, GetExtractReforgeActivityRsp, GetExtractReforgeActivityRsp_CmdId, GetExtractReforgeActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetExtractReforgeActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetExtractReforgeActivityRsp_CmdId.CMD_ID, {
        retcode: GetExtractReforgeActivityRsp_Retcode.NOT_OPEN,
    } as GetExtractReforgeActivityRsp)
}