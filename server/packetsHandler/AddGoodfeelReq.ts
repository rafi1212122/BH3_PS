import net from "net"
import logger from "../../util/logger"
import { AddGoodfeelReq, AddGoodfeelRsp, AddGoodfeelRsp_CmdId, AddGoodfeelRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: AddGoodfeelReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, AddGoodfeelRsp_CmdId.CMD_ID, {
        retcode: AddGoodfeelRsp_Retcode['SUCC'],
    } as AddGoodfeelRsp)
}