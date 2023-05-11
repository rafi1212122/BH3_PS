import { randomInt } from "crypto";
import { GetGalInteractTriggerEventReq, GetGalInteractTriggerEventRsp, GetGalInteractTriggerEventRsp_CmdId, GetGalInteractTriggerEventRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as GetGalInteractTriggerEventReq

    const rsp = Packet.encode(GetGalInteractTriggerEventRsp, {
        retcode: GetGalInteractTriggerEventRsp_Retcode.SUCC,
        avatarId: data.avatarId,
        eventId: data.eventIdList?.length ? data.eventIdList[randomInt(0, data.eventIdList?.length - 1)] : 0
    }, GetGalInteractTriggerEventRsp_CmdId.CMD_ID)

    session.send(rsp)
}