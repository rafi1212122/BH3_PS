import net from "net"
import logger from "../../util/logger"
import { GetWebActivityInfoReq, GetWebActivityInfoRsp, GetWebActivityInfoRsp_CmdId, GetWebActivityInfoRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWebActivityInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWebActivityInfoRsp_CmdId.CMD_ID, {
        retcode: GetWebActivityInfoRsp_Retcode.SUCC,
        webActivityList: [
            {
                activityId: 5382,
                showType: 0
            }
        ]
    } as GetWebActivityInfoRsp)
}