import { isDocument } from "@typegoose/typegoose";
import { GetAvatarDataRsp, GetAvatarDataRsp_CmdId, AvatarSubSkillLevelUpReq, AvatarSubSkillLevelUpRsp, AvatarSubSkillLevelUpRsp_CmdId, AvatarSubSkillLevelUpRsp_Retcode, GetAvatarDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetEquipmentDataReq from "./GetEquipmentDataReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as AvatarSubSkillLevelUpReq
    const { avatars, user } = session.player

    let avatar = avatars.find(avatar => avatar.avatarId === data.avatarId)

    if(!avatar) {
        return session.send(Packet.encode(AvatarSubSkillLevelUpRsp, {
            retcode: AvatarSubSkillLevelUpRsp_Retcode.AVATAR_NOT_EXIST
        }, AvatarSubSkillLevelUpRsp_CmdId.CMD_ID))
    } else if(!data.subSkillId) {
        return session.send(Packet.encode(AvatarSubSkillLevelUpRsp, {
            retcode: AvatarSubSkillLevelUpRsp_Retcode.SUB_SKILL_NOT_EXIST
        }, AvatarSubSkillLevelUpRsp_CmdId.CMD_ID))
    } else if(!isDocument(user.equipment)) {
        return session.send(Packet.encode(AvatarSubSkillLevelUpRsp, {
            retcode: AvatarSubSkillLevelUpRsp_Retcode.MATERIAL_LACK
        }, AvatarSubSkillLevelUpRsp_CmdId.CMD_ID))
    }

    avatar = await avatar.levelUpSubSkill(data.subSkillId, !!data.isLevelUpAll, user.equipment)
    await avatar.updateOne(avatar) // somehow not saving without this.

    const rsp = Packet.encode(AvatarSubSkillLevelUpRsp, {
        retcode: AvatarSubSkillLevelUpRsp_Retcode.SUCC
    }, AvatarSubSkillLevelUpRsp_CmdId.CMD_ID)

    session.send(Packet.encode(GetAvatarDataRsp, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: [avatar]
    }, GetAvatarDataRsp_CmdId.CMD_ID), rsp)

    await GetEquipmentDataReq(session, { ...packet, data: { } })
}