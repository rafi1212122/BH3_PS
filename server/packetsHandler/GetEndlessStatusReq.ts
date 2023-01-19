import net from "net"
import { EndlessType, GetEndlessStatusReq, GetEndlessStatusRsp, GetEndlessStatusRsp_CmdId, GetEndlessStatusRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetEndlessStatusReq) => {
    Packet.getInstance().serializeAndSend(socket, GetEndlessStatusRsp_CmdId.CMD_ID, {
        retcode: GetEndlessStatusRsp_Retcode.SUCC,
        curStatus: {
            endlessType: EndlessType.ENDLESS_TYPE_FRONT,
            canJoinIn: true,
            preGeneralActivityId: 40000162
        },
        selectedEndlessType: 0
    } as GetEndlessStatusRsp)
}