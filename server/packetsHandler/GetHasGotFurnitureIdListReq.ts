import net from "net"
import { GetHasGotFurnitureIdListReq, GetHasGotFurnitureIdListRsp, GetHasGotFurnitureIdListRsp_CmdId, GetHasGotFurnitureIdListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetHasGotFurnitureIdListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetHasGotFurnitureIdListRsp_CmdId.CMD_ID, {
        retcode: GetHasGotFurnitureIdListRsp_Retcode.SUCC,
    } as GetHasGotFurnitureIdListRsp)
}