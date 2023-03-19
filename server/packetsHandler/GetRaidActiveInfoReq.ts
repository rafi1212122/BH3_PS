import net from "net"
import { GetRaidActiveInfoReq, GetRaidActiveInfoRsp, GetRaidActiveInfoRsp_CmdId, GetRaidActiveInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRaidActiveInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRaidActiveInfoRsp_CmdId.CMD_ID, {
        retcode: GetRaidActiveInfoRsp_Retcode.NOT_OPEN,
    } as GetRaidActiveInfoRsp)
}