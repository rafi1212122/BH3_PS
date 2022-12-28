import net from "net"
import { GetCustomHeadDataReq, GetCustomHeadDataRsp, GetCustomHeadDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCustomHeadDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetCustomHeadDataRsp'], {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: []
    } as GetCustomHeadDataRsp)
    socket.write(reply)
}