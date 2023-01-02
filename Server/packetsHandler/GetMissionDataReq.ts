import net from "net"
import logger from "../../util/logger"
import { GetMissionDataReq, GetMissionDataRsp, GetMissionDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMissionDataReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetMissionDataRsp'], {
        retcode: GetMissionDataRsp_Retcode.SUCC,
        isAll: true,
    } as GetMissionDataRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}