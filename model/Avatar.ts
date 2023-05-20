import { DocumentType, ModelOptions, Prop, Severity, getModelForClass } from "@typegoose/typegoose";
import { AvatarArtifactDetail, AvatarBindEquipMode, AvatarSkill, AvatarSubSkill } from "../resources/proto/BengHuai";
import AvatarSubSkillData from "../utils/excel/AvatarSubSkillData";
import { Equipment } from "./Equipment";

@ModelOptions({ schemaOptions: { timestamps: true, collection: "avatars" }, options: { customName: "Avatar", allowMixed: Severity.ALLOW } })
export class Avatar {
    @Prop({ required: true })
    avatarId!: number;

    @Prop()
    star?: number;

    @Prop({ required: true })
    level!: number;

    @Prop({ required: true })
    exp!: number;

    @Prop({ required: true })
    fragment!: number;

    @Prop({ required: true })
    weaponUniqueId!: number;

    @Prop({ required: true })
    stigmataUniqueId1!: number;

    @Prop({ required: true })
    stigmataUniqueId2!: number;

    @Prop({ required: true })
    stigmataUniqueId3!: number;

    @Prop({ required: true })
    skillList!: AvatarSkill[];

    @Prop()
    touchGoodfeel?: number;

    @Prop()
    todayHasAddGoodfeel?: number;

    @Prop()
    stageGoodfeel?: number;

    @Prop({ required: true })
    dressList!: number[];

    @Prop()
    dressId?: number;

    @Prop()
    mode?: AvatarBindEquipMode;

    @Prop()
    avatarArtifact?: AvatarArtifactDetail;

    @Prop()
    subStar?: number;

    public async levelUpSubSkill(this: DocumentType<Avatar>, subSkillId: number, isFull: boolean, equipment: DocumentType<Equipment>) {
        const subSkillData = AvatarSubSkillData.fromId(subSkillId)
        if(!subSkillData) throw "Invalid subSkillId!"
        
        const skillIndex = this.skillList.findIndex(skill => skill.skillId === subSkillData.skillId)

        if(skillIndex !== -1) {
            let subSkillList = this.skillList[skillIndex].subSkillList
            if(!subSkillList) {
                subSkillList = [] as AvatarSubSkill[]
            }

            const subSkillIndex = subSkillList.findIndex(subSkill => subSkill.subSkillId === subSkillData.avatarSubSkillId)

            equipment.addMaterial(100, -(subSkillData.unlockScoin * (subSkillList[subSkillIndex] ? (subSkillList[subSkillIndex].level || 1) : 1)))
            await equipment.save()

            if(subSkillIndex !== -1) {
                if (subSkillList[subSkillIndex].level === subSkillData.maxLv) return this
                if(isFull) {
                    subSkillList[subSkillIndex].level = subSkillData.maxLv
                } else {
                    subSkillList[subSkillIndex].level = (subSkillList[subSkillIndex].level || 0) + 1
                }
            } else {
                subSkillList.push({
                    level: isFull ? subSkillData.maxLv : 1,
                    subSkillId: subSkillData.avatarSubSkillId
                })
            }

            this.skillList[skillIndex].subSkillList = subSkillList
        } else {
            this.skillList.push({
                skillId: subSkillData.skillId,
                subSkillList: [
                    {
                        level: isFull ? subSkillData.maxLv : 1,
                        subSkillId: subSkillData.avatarSubSkillId
                    }
                ]
            })
        }

        return await this.save()
    }
}

export default getModelForClass(Avatar)