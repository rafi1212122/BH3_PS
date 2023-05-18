import { isDocument } from "@typegoose/typegoose";
import { IslandDisjoinEquipmentReq, IslandDisjoinEquipmentRsp, IslandDisjoinEquipmentRsp_CmdId, IslandDisjoinEquipmentRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetEquipmentDataReq from "./GetEquipmentDataReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as IslandDisjoinEquipmentReq
    const { user } = session.player

    if(isDocument(user.equipment) && data.type) {
        try {
            user.equipment.disjoinEquipment(data.type, data.uniqueIdList || [])
        } catch (error) {
            session.c.err(error)
        }
        await user.equipment.save()
        await GetEquipmentDataReq(session, { ...packet, data: { } })
    }

    const rsp = Packet.encode(IslandDisjoinEquipmentRsp, {
        retcode: IslandDisjoinEquipmentRsp_Retcode.SUCC,
        disjoinUniqueIdList: data.uniqueIdList
    }, IslandDisjoinEquipmentRsp_CmdId.CMD_ID)

    session.send(rsp)
}