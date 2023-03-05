import net from "net"
import { GetJigsawActivityReq, GetJigsawActivityRsp, GetJigsawActivityRsp_CmdId, GetJigsawActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetJigsawActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetJigsawActivityRsp_CmdId.CMD_ID, {
        retcode: GetJigsawActivityRsp_Retcode.NOT_OPEN,
        activityId: packet.activityId
    } as GetJigsawActivityRsp)
}