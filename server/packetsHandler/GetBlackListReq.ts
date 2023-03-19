import net from "net"
import { GetBlackListReq, GetBlackListRsp, GetBlackListRsp_CmdId, GetBlackListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetBlackListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetBlackListRsp_CmdId.CMD_ID, {
        retcode: GetBlackListRsp_Retcode.SUCC,
        isWholeData: true,
        isOnlyUid: true
    } as GetBlackListRsp)
}