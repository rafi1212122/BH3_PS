import { isDocument } from "@typegoose/typegoose"
import { AddAvatarExpByMaterialReq, AddAvatarExpByMaterialRsp, AddAvatarExpByMaterialRsp_CmdId, AddAvatarExpByMaterialRsp_Retcode } from "../../../resources/proto/BengHuai"
import MaterialData from "../../../utils/excel/MaterialData"
import Packet from "../Packet"
import Session from "../Session"
import GetEquipmentDataReq from "./GetEquipmentDataReq"

export default async (session: Session, packet: Packet) => {
    const data = packet.data as AddAvatarExpByMaterialReq
    const { user } = session.player
    const expItemData = MaterialData.fromId(data.materialId || 0)

    if(expItemData && data.avatarId) {
        if(isDocument(user.equipment)) {    
            await user.equipment.addMaterial(expItemData.ID, -(data.materialNum || 1)).save()
        }
        GetEquipmentDataReq(session, { ...packet, data: { } })

        await user.addAvatarExp(expItemData.characterExpProvide*(data.materialNum || 1), session, data.avatarId)
    }

    session.send(Packet.encode(AddAvatarExpByMaterialRsp, {
        retcode: AddAvatarExpByMaterialRsp_Retcode.SUCC
    }, AddAvatarExpByMaterialRsp_CmdId.CMD_ID))
}