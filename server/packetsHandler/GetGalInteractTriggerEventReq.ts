import net from "net"
import { GetGalInteractTriggerEventReq, GetGalInteractTriggerEventRsp, GetGalInteractTriggerEventRsp_CmdId, GetGalInteractTriggerEventRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import crypto from 'crypto'

export default (socket: net.Socket, packet: GetGalInteractTriggerEventReq) => {
    Packet.getInstance().serializeAndSend(socket, GetGalInteractTriggerEventRsp_CmdId.CMD_ID, {
        retcode: GetGalInteractTriggerEventRsp_Retcode.SUCC,
        avatarId: packet.avatarId,
        eventId: packet.eventIdList[crypto.randomInt(0, packet.eventIdList.length-1)]
    } as GetGalInteractTriggerEventRsp)
}