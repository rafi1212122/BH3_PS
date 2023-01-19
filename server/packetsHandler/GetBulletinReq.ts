import net from "net"
import logger from "../../util/logger"
import { GetBulletinReq, GetBulletinRsp, GetBulletinRsp_CmdId, GetBulletinRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetBulletinReq) => {
    Packet.getInstance().serializeAndSend(socket, GetBulletinRsp_CmdId.CMD_ID, {
        retcode: GetBulletinRsp_Retcode.SUCC,
        bulletinList: [],
        isAll: true
    } as GetBulletinRsp)
}