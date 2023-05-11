import { DocumentType, isDocument, isDocumentArray } from "@typegoose/typegoose";
import { User } from "../../../model/User";
import { Avatar, Material, StageInnerDataReportReq, Stigmata, Weapon } from "../../../resources/proto/BengHuai";

export default class Player {
    public readonly user: DocumentType<User>
    public lastStageInnerDataReport = StageInnerDataReportReq.fromPartial({})

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

    get scoin(): number {
        return isDocument(this.user.equipment) ? this.user.equipment.materialList.find(m => m.id === 100)?.num || 0 : 0
    }

    public constructor(user: DocumentType<User>) {
        this.user = user
    }

    public async repopulate() {
        await this.user.populate('avatarList')
        await this.user.populate('equipment')
    }
}