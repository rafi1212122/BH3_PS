import net from "net"
import logger from "../../util/logger"
import { GetClientDataReq, GetClientDataRsp, GetClientDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClientDataReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetClientDataRsp'], {
        retcode: GetClientDataRsp_Retcode.NOT_FOUND,
        id: packet.id,
        type: packet.type
    } as GetClientDataRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}