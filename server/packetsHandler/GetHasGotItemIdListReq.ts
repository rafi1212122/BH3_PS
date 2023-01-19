import net from "net"
import { GetHasGotItemIdListReq, GetHasGotItemIdListRsp, GetHasGotItemIdListRsp_CmdId, GetHasGotItemIdListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetHasGotItemIdListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetHasGotItemIdListRsp_CmdId.CMD_ID, {
        retcode: GetHasGotItemIdListRsp_Retcode.SUCC,
        itemIdList: [
            20001,
            30007,
            30060,
            30113,
            59101,
            401998,
            401999
        ]
    } as GetHasGotItemIdListRsp)
}