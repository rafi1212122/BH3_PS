import net from "net"
import { GetBulletinReq, GetBulletinRsp, GetBulletinRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetBulletinReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetBulletinRsp'], {
        retcode: GetBulletinRsp_Retcode.SUCC,
        bulletinList: [],
        isAll: true
    } as GetBulletinRsp)
    socket.write(reply)
}