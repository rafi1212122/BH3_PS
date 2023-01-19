import net from "net"
import { TakeGalInteractTriggerEventReq, TakeGalInteractTriggerEventRsp, TakeGalInteractTriggerEventRsp_CmdId, TakeGalInteractTriggerEventRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: TakeGalInteractTriggerEventReq) => {
    Packet.getInstance().serializeAndSend(socket, TakeGalInteractTriggerEventRsp_CmdId.CMD_ID, {
        retcode: TakeGalInteractTriggerEventRsp_Retcode.SUCC,
        avatarId: packet.avatarId,
        eventId: packet.eventId,
    } as TakeGalInteractTriggerEventRsp)
}