import net from "net"
import { GetClientDataReq, GetClientDataRsp, GetClientDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClientDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetClientDataRsp'], {
        retcode: GetClientDataRsp_Retcode.NOT_FOUND,
        id: packet.id,
        type: packet.type
    } as GetClientDataRsp)
    socket.write(reply)
}