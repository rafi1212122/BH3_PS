import net from "net"
import { MpGetMatchInfoReq, MpGetMatchInfoRsp, MpGetMatchInfoRsp_CmdId, MpGetMatchInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: MpGetMatchInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, MpGetMatchInfoRsp_CmdId.CMD_ID, {
        retcode: MpGetMatchInfoRsp_Retcode.SUCC,
        lobbyIdx: 1
    } as MpGetMatchInfoRsp)
}