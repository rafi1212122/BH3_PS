import { isDocument } from "@typegoose/typegoose";
import { GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode, GetMainDataReq_DataType, GetMainDataRsp, GetMainDataRsp_CmdId, PlayerLevelUpNotify, PlayerLevelUpNotify_CmdId } from "../../resources/proto/BengHuai";
import Packet from "../tcp/Packet";
import Session from "../tcp/Session";
import Player from "../tcp/game/Player";

export default async (instance: Session | Player, ...args: string[]) => {
    let session: Session | undefined
    let player: Player

    if(instance instanceof Session) {
        session = instance
        player = instance.player
    }else { player = instance }

    const { equipment } = player.user

    if(!isDocument(equipment)) {
        throw "Server error!"
    }

    const type = args[0]
    const materialId = parseInt(args[1])
    const amount = parseInt(args[2])

    if(!materialId || !amount) {
        throw "Bad arguments!"
    }
    
    switch (type) {
        case "add":
            equipment.addMaterial(materialId, amount)
            await equipment.save()
            break;
        default:
            throw "Bad command!"
    }

    const updatedMaterial = equipment.materialList.find(m => m.id === materialId)

    if(session && updatedMaterial) {
        session.send(Packet.encode(GetEquipmentDataRsp, {
            retcode: GetEquipmentDataRsp_Retcode.SUCC,
            materialList: [updatedMaterial],
            vitalityValue: 1000
        }, GetEquipmentDataRsp_CmdId.CMD_ID))
    }
}