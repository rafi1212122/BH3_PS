import net from "net"
import logger from "../../util/logger"
import { GetCustomHeadDataReq, GetCustomHeadDataRsp, GetCustomHeadDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCustomHeadDataReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetCustomHeadDataRsp'], {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: []
    } as GetCustomHeadDataRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}