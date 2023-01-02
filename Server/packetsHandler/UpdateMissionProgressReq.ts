import net from "net"
import logger from "../../util/logger"
import { UpdateMissionProgressReq, UpdateMissionProgressRsp, UpdateMissionProgressRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UpdateMissionProgressReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['UpdateMissionProgressRsp'], {
        retcode: UpdateMissionProgressRsp_Retcode.SUCC,
    } as UpdateMissionProgressRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}