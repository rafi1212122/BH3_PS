import net from "net"
import { GetEliteChapterCompensationInfoReq, GetEliteChapterCompensationInfoRsp, GetEliteChapterCompensationInfoRsp_CmdId, GetEliteChapterCompensationInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetEliteChapterCompensationInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetEliteChapterCompensationInfoRsp_CmdId.CMD_ID, {
        retcode: GetEliteChapterCompensationInfoRsp_Retcode.SUCC,
    } as GetEliteChapterCompensationInfoRsp)
}