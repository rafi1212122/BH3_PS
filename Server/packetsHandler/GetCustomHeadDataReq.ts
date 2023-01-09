import net from "net"
import logger from "../../util/logger"
import { GetCustomHeadDataReq, GetCustomHeadDataRsp, GetCustomHeadDataRsp_CmdId, GetCustomHeadDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCustomHeadDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetCustomHeadDataRsp_CmdId.CMD_ID, {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: []
    } as GetCustomHeadDataRsp)
}