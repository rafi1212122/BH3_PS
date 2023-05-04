import { ModelOptions, Prop, Severity, getModelForClass } from "@typegoose/typegoose";
import { AvatarArtifactDetail, AvatarBindEquipMode, AvatarSkill } from "../resources/proto/BengHuai";

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
}

export default getModelForClass(Avatar)