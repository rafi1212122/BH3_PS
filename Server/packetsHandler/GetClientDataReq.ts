import net from "net"
import logger from "../../util/logger"
import { GetClientDataReq, GetClientDataRsp, GetClientDataRsp_CmdId, GetClientDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClientDataReq, cmdId: number) => {
    const reply = Packet.getInstance().serializeAndSend(socket, GetClientDataRsp_CmdId.CMD_ID, {
        retcode: GetClientDataRsp_Retcode.NOT_FOUND,
        id: 0,
        type: packet.type
    } as GetClientDataRsp)
}