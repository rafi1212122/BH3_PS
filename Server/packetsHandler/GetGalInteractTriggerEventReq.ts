import net from "net"
import { GetGalInteractTriggerEventReq, GetGalInteractTriggerEventRsp, GetGalInteractTriggerEventRsp_CmdId, GetGalInteractTriggerEventRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetGalInteractTriggerEventReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetGalInteractTriggerEventRsp_CmdId.CMD_ID, {
        retcode: GetGalInteractTriggerEventRsp_Retcode.SUCC,
        avatarId: packet.avatarId,
        eventId: packet.eventIdList[0]
    } as GetGalInteractTriggerEventRsp)
}