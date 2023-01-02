import net from "net"
import logger from "../../util/logger"
import { GetClearStageActivityReq, GetClearStageActivityRsp, GetClearStageActivityRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClearStageActivityReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetClearStageActivityRsp'], {
        retcode: GetClearStageActivityRsp_Retcode.SUCC,
        activity: {
            
        }
    } as GetClearStageActivityRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}