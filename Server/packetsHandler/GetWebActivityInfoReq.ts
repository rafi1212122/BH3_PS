import net from "net"
import logger from "../../util/logger"
import { GetWebActivityInfoReq, GetWebActivityInfoRsp, GetWebActivityInfoRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWebActivityInfoReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetWebActivityInfoRsp'], {
        retcode: GetWebActivityInfoRsp_Retcode.SUCC,
        webActivityList: [
            {
                activityId: 5382,
                showType: 0
            }
        ]
    } as GetWebActivityInfoRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}