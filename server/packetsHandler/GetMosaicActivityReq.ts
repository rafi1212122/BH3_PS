import net from "net"
import { GetMosaicActivityReq, GetMosaicActivityRsp, GetMosaicActivityRsp_CmdId, GetMosaicActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMosaicActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetMosaicActivityRsp_CmdId.CMD_ID, {
        retcode: GetMosaicActivityRsp_Retcode.SUCC,
    } as GetMosaicActivityRsp)
}