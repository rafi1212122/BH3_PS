import net from "net"
import { GetEmojiDataReq, GetEmojiDataRsp, GetEmojiDataRsp_CmdId, GetEmojiDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetEmojiDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetEmojiDataRsp_CmdId.CMD_ID, {
        retcode: GetEmojiDataRsp_Retcode.SUCC,
        isAll: true
    } as GetEmojiDataRsp)
}