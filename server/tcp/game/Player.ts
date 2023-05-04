import { DocumentType, isDocument, isDocumentArray } from "@typegoose/typegoose";
import { User } from "../../../model/User";
import { Avatar, Material, Stigmata, Weapon } from "../../../resources/proto/BengHuai";

export default class Player {
    public readonly user: DocumentType<User>

    get avatars(): Avatar[] {
        return isDocumentArray(this.user.avatarList) ? this.user.avatarList : []
    }

    get weapons(): Weapon[] {
        return isDocument(this.user.equipment) ? this.user.equipment.weaponList : []
    }

    get stigmatas(): Stigmata[] {
        return isDocument(this.user.equipment) ? this.user.equipment.stigmataList : []
    }

    get materials(): Material[] {
        return isDocument(this.user.equipment) ? this.user.equipment.materialList : []
    }

    public constructor(user: DocumentType<User>) {
        this.user = user
    }

    public async repopulate() {
        await this.user.populate('avatarList')
        await this.user.populate('equipment')
    }
}