import net from "net"
import logger from "../../util/logger"
import { GetBulletinReq, GetBulletinRsp, GetBulletinRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetBulletinReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetBulletinRsp'], {
        retcode: GetBulletinRsp_Retcode.SUCC,
        bulletinList: [],
        isAll: true
    } as GetBulletinRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}