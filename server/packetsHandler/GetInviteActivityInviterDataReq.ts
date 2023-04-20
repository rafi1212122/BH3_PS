import net from "net"
import { GetInviteActivityInviterDataReq, GetInviteActivityInviterDataRsp, GetInviteActivityInviterDataRsp_CmdId, GetInviteActivityInviterDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetInviteActivityInviterDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetInviteActivityInviterDataRsp_CmdId.CMD_ID, {
        retcode: GetInviteActivityInviterDataRsp_Retcode.LEVEL_LACK,
    } as GetInviteActivityInviterDataRsp)
}