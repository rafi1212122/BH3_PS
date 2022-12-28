import net from "net"
import { GetChapterCompensationInfoReq, GetChapterCompensationInfoRsp, GetChapterCompensationInfoRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetChapterCompensationInfoReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetChapterCompensationInfoRsp'], {
        retcode: GetChapterCompensationInfoRsp_Retcode.SUCC,
        isAll: true,
        compensateList: []
    } as GetChapterCompensationInfoRsp)
    socket.write(reply)
}