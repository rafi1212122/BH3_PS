import { DocumentType, ModelOptions, Prop, Ref, ReturnModelType, getModelForClass, isDocument, isDocumentArray } from "@typegoose/typegoose";
import { randomInt } from "crypto";
import cuid from "cuid";
import Player from "../server/tcp/game/Player";
import EquipmentModel, { Equipment } from "./Equipment";
import AvatarData from "../utils/excel/AvatarData";
import AvatarModel, { Avatar } from "./Avatar";

@ModelOptions({ schemaOptions: { timestamps: true, collection: "users" }, options: { customName: "User" } })
export class User {
    @Prop({ unique: true, default: randomInt(10000000, 50000000) })
    public uid!: number;

    @Prop({ required: true, unique: true })
    public name!: string;

    @Prop()
    public nick?: string;

    @Prop({ default: 0 })
    public level!: number;

    @Prop({ default: 0 })
    public exp!: number;

    @Prop({ default: 0 })
    public hcoin!: number;
    
    @Prop({ default: 0 })
    public stamina!: number;
    
    @Prop()
    public selfDesc?: string;
    
    @Prop({ default: true })
    public isFirstLogin!: boolean;
    
    @Prop({ default: cuid() })
    public token!: string;
    
    @Prop({ default: 0 })
    public warshipId!: number;
    
    @Prop({ default: 101 })
    public warshipFirstAvatarId!: number;
    
    @Prop({ default: 101 })
    public assistantAvatarId!: number;
    
    @Prop()
    public birthDate?: number;

    @Prop({ ref: () => Equipment })
    public equipment!: Ref<Equipment>;

    @Prop({ ref: () => Avatar })
    public avatarList!: Ref<Avatar>[];

    public static async fromName(this: ReturnModelType<typeof User>, name: string) {
        const user = await this.findOneAndUpdate({
            name
        }, {
            $setOnInsert: {
                equipment: await EquipmentModel.create({ materialList: [], mechaList: [], stigmataList: [], weaponList: [] })
            }
        }, {
            upsert: true,
            returnDocument: 'after'
        })
        
        if(!user.populated('equipment')) {
            await user.populate('equipment')
            if (!isDocument(user.equipment)) {
                throw "Failed to populate user equipment!"
            }
            await user.addAvatar(101, user.equipment)
        }
        
        await user.save()

        return user
    }
    
    public static dbFromUid(this: ReturnModelType<typeof User>, uid: number) {
        return this.findOne({ uid })
    }

    public static fromUid(this: ReturnModelType<typeof User>, uid: number) {
        return this.findOne({ uid }).exec()
    }

    public static fromToken(this: ReturnModelType<typeof User>, token: string) {
        return this.findOne({ token }).exec()
    }

    public static async playerFromUID(this: ReturnModelType<typeof User>, uid: number) {
        const user = await this.findOne({ uid })
        if(!user) throw "Why is user not found!!!"

        const player = new Player(user)
        await player.repopulate()

        return player
    }

    public async addAvatar(this: DocumentType<User>, avatarId: number, equipment: DocumentType<Equipment>) {
        const avatarData = AvatarData.fromId(avatarId)
        if(!avatarData) throw "Invalid avatarId!"

        const weapon = await equipment.addWeapon(avatarData.initialWeapon)

        if(!this.populated('avatarList')){
            await this.populate('avatarList')
        }

        if (!isDocumentArray(this.avatarList)) {
            throw "Failed to populate user avatarList!"
        }

        const newAvatar = await AvatarModel.create({
            avatarId: avatarData.avatarID,
            star: avatarData.unlockStar,
            level: 1,
            exp: 0,
            fragment: 0,
            weaponUniqueId: weapon.uniqueId,
            stigmataUniqueId1: 0,
            stigmataUniqueId2: 0,
            stigmataUniqueId3: 0,
            skillList: avatarData.skillList.map(skillId=>({ skillId })),
            touchGoodfeel: 0,
            todayHasAddGoodfeel: 0,
            dressList: [avatarData.DefaultDressId],
            dressId: avatarData.DefaultDressId,
            subStar: 0
        })

        this.avatarList.push(newAvatar)

        await equipment.save()
    }
}

export default getModelForClass(User)