import { isDocument } from "@typegoose/typegoose"
import { EquipmentPowerUpReq, EquipmentPowerUpRsp, EquipmentPowerUpRsp_CmdId, EquipmentPowerUpRsp_Retcode, EquipmentType, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../../../resources/proto/BengHuai"
import Packet from "../Packet"
import Session from "../Session"

export default async (session: Session, packet: Packet) => {
    const data = packet.data as EquipmentPowerUpReq
    const { user } = session.player
    
    switch (data.mainItem?.type) {
        case EquipmentType.EQUIPMENT_WEAPON:
            if(isDocument(user.equipment)) {
                if(data.mainItem.idOrUniqueId) {
                    const updatedWeapon = user.equipment.addWeaponExpFromItemList(data.mainItem.idOrUniqueId, data.consumeItemList?.itemList || [])
                    session.send(Packet.encode(GetEquipmentDataRsp, {
                        retcode: GetEquipmentDataRsp_Retcode.SUCC,
                        weaponList: [updatedWeapon]
                    }, GetEquipmentDataRsp_CmdId.CMD_ID))
                }
                await user.equipment.save()
            }
            break;
        default:
            throw "Function not yet implemented!, please make a github issue for what you trying to do."
    }


    session.send(Packet.encode(EquipmentPowerUpRsp, {
        retcode: EquipmentPowerUpRsp_Retcode.SUCC,
        mainItem: data.mainItem,
        boostRate: 100,
        returnMaterialList: []
    }, EquipmentPowerUpRsp_CmdId.CMD_ID))
}