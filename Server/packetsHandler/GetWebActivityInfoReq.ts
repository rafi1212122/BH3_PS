import net from "net"
import { GetWebActivityInfoReq, GetWebActivityInfoRsp, GetWebActivityInfoRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWebActivityInfoReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetWebActivityInfoRsp'], {
        retcode: GetWebActivityInfoRsp_Retcode.SUCC,
        webActivityList: []
    } as GetWebActivityInfoRsp)
    socket.write(reply)
}