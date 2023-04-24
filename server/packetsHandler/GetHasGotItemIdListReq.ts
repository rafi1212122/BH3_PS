import net from "net"
import { GetHasGotItemIdListReq, GetHasGotItemIdListRsp, GetHasGotItemIdListRsp_CmdId, GetHasGotItemIdListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import { getItems } from "../../mongodb/Model/Item"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: GetHasGotItemIdListReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user) {
        return Packet.getInstance().serializeAndSend(socket, GetHasGotItemIdListRsp_CmdId.CMD_ID, {
            retcode: GetHasGotItemIdListRsp_Retcode.FAIL
        } as GetHasGotItemIdListRsp)
    }

    Packet.getInstance().serializeAndSend(socket, GetHasGotItemIdListRsp_CmdId.CMD_ID, {
        retcode: GetHasGotItemIdListRsp_Retcode.SUCC,
        itemIdList: (await getItems(user.uid)).map(item=>item.id)
    } as GetHasGotItemIdListRsp)
}