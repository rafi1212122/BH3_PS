import net from "net"
import logger from "../../util/logger"
import { GetChapterCompensationInfoReq, GetChapterCompensationInfoRsp, GetChapterCompensationInfoRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetChapterCompensationInfoReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetChapterCompensationInfoRsp'], {
        retcode: GetChapterCompensationInfoRsp_Retcode.SUCC,
        isAll: true,
        compensateList: []
    } as GetChapterCompensationInfoRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}