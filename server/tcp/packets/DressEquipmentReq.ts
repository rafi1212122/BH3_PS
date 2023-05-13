import { DressEquipmentReq, DressEquipmentRsp, DressEquipmentRsp_CmdId, DressEquipmentRsp_Retcode, EquipmentSlot, GetAvatarDataReq_CmdId, GetEquipmentDataReq_CmdId } from "../../../resources/proto/BengHuai"
import GetAvatarDataReq from "./GetAvatarDataReq";
import GetEquipmentDataReq from "./GetEquipmentDataReq";
import Config, { VerboseLevel } from "../../../utils/Config"
import Packet from "../Packet"
import Session from "../Session"

// TODO: Figure out how the game handles swapping pieces of gear between Valks
export default async (session: Session, packet: Packet) => {
    const { user } = session.player
    const data = packet.data as DressEquipmentReq
    const uid = data.uniqueId
    const avatar = session.player.avatars.find(a => a.avatarId === data.avatarId)
    const slot = data.slot

    if (Config.LOG_LEVEL > VerboseLevel.NORMAL)
        session.c.log("DressEquipmentReq", `${data.uniqueId}, ${data.avatarId}, ${data.slot}`)

    if (avatar !== undefined) {
        switch (slot) {
            case EquipmentSlot.EQUIPMENT_SLOT_WEAPON_1:
                avatar.weaponUniqueId = uid
                break;
            case EquipmentSlot.EQUIPMENT_SLOT_STIGMATA_1:
                avatar.stigmataUniqueId1 = uid
                break;
            case EquipmentSlot.EQUIPMENT_SLOT_STIGMATA_2:
                avatar.stigmataUniqueId2 = uid
                break;
            case EquipmentSlot.EQUIPMENT_SLOT_STIGMATA_3:
                avatar.stigmataUniqueId3 = uid
                break;
        }

        const rsp = Packet.encode(DressEquipmentRsp, {
            retcode: DressEquipmentRsp_Retcode.SUCC
        }, DressEquipmentRsp_CmdId.CMD_ID)

        session.send(rsp)

        await user.save();

        await GetEquipmentDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetEquipmentDataReq_CmdId.CMD_ID))
        await GetAvatarDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetAvatarDataReq_CmdId.CMD_ID))
    }
    else
        throw "Invalid Avatar in DressEquipmentReq"
}
