import { DocumentType, ModelOptions, Prop, Ref, ReturnModelType, Severity, getModelForClass, isDocument, isDocumentArray } from "@typegoose/typegoose";
import { randomInt } from "crypto";
import cuid from "cuid";
import Player from "../server/tcp/game/Player";
import EquipmentModel, { Equipment } from "./Equipment";
import AvatarData from "../utils/excel/AvatarData";
import AvatarModel, { Avatar } from "./Avatar";
import OWStoryModel, { OWStory } from "./OWStory";
import PlayerLevelData from "../utils/excel/PlayerLevelData";
import Session from "../server/tcp/Session";
import Packet from "../server/tcp/Packet";
import { AvatarTeam, CustomAvatarTeam, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode, PlayerLevelUpNotify, PlayerLevelUpNotify_CmdId, Stage } from "../resources/proto/BengHuai";
import AvatarLevelData from "../utils/excel/AvatarLevelData";

@ModelOptions({ schemaOptions: { timestamps: true, collection: "users" }, options: { customName: "User", allowMixed: Severity.ALLOW } })
export class User {
    @Prop({ unique: true, default: randomInt(10000000, 50000000) })
    public uid!: number;

    @Prop({ required: true, unique: true })
    public name!: string;

    @Prop()
    public nick?: string;

    @Prop({ default: 1 })
    public level!: number;

    @Prop({ default: 0 })
    public exp!: number;

    @Prop({ default: 0 })
    public hcoin!: number;
    
    @Prop({ default: 80 })
    public stamina!: number;
    
    @Prop()
    public selfDesc?: string;
    
    @Prop({ default: true })
    public isFirstLogin!: boolean;
    
    @Prop({ default: cuid() })
    public token!: string;
    
    @Prop({ default: 0 })
    public warshipId!: number;
    
    @Prop({ default: { firstAvatarId: 101, secondAvatarId: 0  } })
    public warshipAvatar!: {
        firstAvatarId: number
        secondAvatarId: number
    };
    
    @Prop({ default: 0 })
    public assistantAvatarId!: number;
    
    @Prop()
    public birthDate?: number;

    @Prop({ default: [{ avatarIdList: [101], stageType: 1 }] })
    public avatarTeams!: AvatarTeam[];

    @Prop({ default: [] })
    public customAvatarTeams!: CustomAvatarTeam[];

    @Prop({ default: [] })
    public openworldSpawns!: { spawnPoint: string, mapId: number }[];

    @Prop({ default: [] })
    public finishedStages!: Stage[];

    @Prop({ ref: () => Equipment })
    public equipment!: Ref<Equipment>;

    @Prop({ ref: () => Avatar })
    public avatarList!: Ref<Avatar>[];

    @Prop({ ref: () => OWStory })
    public openworldStories!: Ref<OWStory>[];

    public static async fromName(this: ReturnModelType<typeof User>, name: string) {
        const user = await this.findOneAndUpdate({
            name
        }, {
            $setOnInsert: {
                equipment: await EquipmentModel.create({ materialList: [{ id: 100, num: 750 }, { id: 119107, num: 6 }], mechaList: [], stigmataList: [], weaponList: [] })
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
        if(!user) throw "Failed to create player from uid!"

        const player = new Player(user)
        await player.populate()

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
            stigmataUniqueId1: avatarData.avatarID === 101 ? (await equipment.addStigmata(30007)).uniqueId : 0,
            stigmataUniqueId2: avatarData.avatarID === 101 ? (await equipment.addStigmata(30060)).uniqueId : 0,
            stigmataUniqueId3: avatarData.avatarID === 101 ? (await equipment.addStigmata(30113)).uniqueId : 0,
            skillList: avatarData.skillList.map(skillId => ({ skillId, subSkillList: [] })),
            touchGoodfeel: 0,
            todayHasAddGoodfeel: 0,
            dressList: [avatarData.DefaultDressId],
            dressId: avatarData.DefaultDressId,
            subStar: 0
        })

        this.avatarList.push(newAvatar)

        await equipment.save()
    }

    public addLevel(this: DocumentType<User>, exp: number, session: Session) {
        let expRemain = exp

        while (expRemain) {
            const playerLevelData = PlayerLevelData.fromLevel(this.level)
            if(!playerLevelData) throw "Invalid level!"
    
            if (this.exp + expRemain >= playerLevelData?.exp) {
                if (this.level < 88) {
                    this.level++
                    session.send(Packet.encode(PlayerLevelUpNotify, { oldLevel: this.level - 1, newLevel: this.level }, PlayerLevelUpNotify_CmdId.CMD_ID))
                    expRemain -= playerLevelData.exp
                } else {
                    this.$set('exp', playerLevelData?.exp)
                    expRemain = 0
                }
            }else {
                this.$inc('exp', expRemain)
                expRemain = 0
            }
        }
    }

    public updateAvatarTeam(this: DocumentType<User>, team: AvatarTeam) {
        const index = this.avatarTeams.findIndex(({ stageType }) => team.stageType === stageType);
        
        if (index === -1) {
            this.avatarTeams.push(team);
        } else {
            this.avatarTeams[index] = { ...this.avatarTeams[index], avatarIdList: team.avatarIdList };
        }
        return this
    }

    public updateCustomAvatarTeam(this: DocumentType<User>, team: CustomAvatarTeam) {
        const index = this.customAvatarTeams.findIndex(({ teamId }) => team.teamId === teamId);
        
        if (index === -1) {
            this.customAvatarTeams.push(team);
        } else {
            this.customAvatarTeams[index] = { ...this.customAvatarTeams[index], avatarIdList: team.avatarIdList, elfIdList: team.elfIdList, name: team.name };
        }
        return this
    }

    public async addAvatarExp(this: DocumentType<User>, exp: number, session: Session, ...avatarIds: number[]) {
        if(!this.populated('avatarList')){
            await this.populate('avatarList')
        }

        if (!isDocumentArray(this.avatarList)) {
            throw "Failed to populate user avatarList!"
        }

        for (const avatarId of avatarIds) {
            const avatar = this.avatarList.find(a => a.avatarId === avatarId)
            if(!avatar) return
            
            let expRemain = exp
            while (expRemain) {
                const avatarLevelData = AvatarLevelData.fromLevel(avatar.level)
                if(!avatarLevelData) throw "Bad avatar data!"
        
                if (avatar.exp + expRemain >= avatarLevelData.exp) {
                    if (avatar.level < 80) {
                        avatar.level++
                        expRemain -= avatarLevelData.exp
                    } else {
                        avatar.$set('exp', avatarLevelData.exp)
                        expRemain = 0
                    }
                }else {
                    avatar.$inc('exp', expRemain)
                    expRemain = 0
                }
            }
            await avatar.save()
        }


        session.send(Packet.encode(GetAvatarDataRsp, {
            retcode: GetAvatarDataRsp_Retcode.SUCC,
            avatarList: this.avatarList.filter(({ avatarId }) => avatarIds.includes(avatarId))
        }, GetAvatarDataRsp_CmdId.CMD_ID))
    }


    public async setStory(this: DocumentType<User>, storyId: number, progress = 0) {
        if(!this.populated('openworldStories')){
            await this.populate('openworldStories')
        }

        if (!isDocumentArray(this.openworldStories)) {
            throw "Failed to populate user openworldStories!"
        }

        const story = this.openworldStories.find(({ storyId }) => storyId === storyId)

        if(story) {
            story.$set('storyProgress', progress)
            await story.save()
        }else {
            this.openworldStories.push(await OWStoryModel.create({
                storyId,
                storyProgress: progress
            }))
        }

        await this.save()
    }

    public setOWSpawn(this: DocumentType<User>, mapId: number, spawnPoint: string) {
        const index = this.openworldSpawns.findIndex(s => s.mapId === mapId);
        
        if (index === -1) {
            this.openworldSpawns.push({ mapId, spawnPoint });
        } else {
            this.openworldSpawns[index] = { ...this.openworldSpawns[index], spawnPoint };
        }

        return this
    }
}

export default getModelForClass(User)