import { DressEquipmentReq, DressEquipmentRsp, DressEquipmentRsp_CmdId, DressEquipmentRsp_Retcode, EquipmentSlot, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../../resources/proto/BengHuai"
import Config, { VerboseLevel } from "../../../utils/Config"
import Packet from "../Packet"
import Session from "../Session"

// TODO: Figure out how the game handles swapping pieces of gear between Valks
export default async (session: Session, packet: Packet) => {
    const data = packet.data as DressEquipmentReq
    const uid = data.uniqueId || 0
    const avatar = session.player.avatars.find(a => a.avatarId === data.avatarId)
    const slot = data.slot

    if (Config.LOG_LEVEL > VerboseLevel.NORMAL) {
        session.c.log("DressEquipmentReq", `${data.uniqueId}, ${data.avatarId}, ${data.slot}`)
    }

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

        session.send(Packet.encode(GetAvatarDataRsp, {
            retcode: GetAvatarDataRsp_Retcode.SUCC,
            avatarList: [avatar],
            isAll: false
        }, GetAvatarDataRsp_CmdId.CMD_ID), rsp)

        await avatar.save();
    }
    else
        throw "Invalid Avatar in DressEquipmentReq"
}
