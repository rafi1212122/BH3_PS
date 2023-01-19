import net from "net"
import { GetRoomDataReq, GetRoomDataRsp, GetRoomDataRsp_CmdId, GetRoomDataRsp_Retcode, RoomMode, SyncRoomDataNotify, SyncRoomDataNotify_CmdId, SyncRoomMatchDataNotify, SyncRoomMatchDataNotify_CmdId } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRoomDataReq) => {
    Packet.getInstance().serializeAndSend(socket, SyncRoomDataNotify_CmdId.CMD_ID, {
        playerRoomStatus: {
            roomMode: RoomMode.ROOM_MODE_INVALID,
            roomId: 0
        },
        roomInfo: {}
    } as SyncRoomDataNotify)

    Packet.getInstance().serializeAndSend(socket, SyncRoomMatchDataNotify_CmdId.CMD_ID, {
        roomMode: RoomMode.ROOM_MODE_INVALID,
        isInMatching: false,
        matchStartTime: 0
    } as SyncRoomMatchDataNotify)

    Packet.getInstance().serializeAndSend(socket, GetRoomDataRsp_CmdId.CMD_ID, {
        retcode: GetRoomDataRsp_Retcode.SUCC,
    } as GetRoomDataRsp)
}