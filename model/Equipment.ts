import { DocumentType, ModelOptions, Prop, Severity, getModelForClass } from "@typegoose/typegoose";
import { Material, Mecha, Stigmata, Weapon } from "../resources/proto/BengHuai";
import WeaponData from "../utils/excel/WeaponData";
import StigmataData from "../utils/excel/StigmataData";
import AutoIncrement from "./AutoIncrement";

@ModelOptions({ schemaOptions: { timestamps: true, collection: "equipments" }, options: { customName: "Equipment", allowMixed: Severity.ALLOW } })
export class Equipment {
    @Prop({ required: true })
    public weaponList!: Weapon[]

    @Prop({ required: true })
    public stigmataList!: Stigmata[]

    @Prop({ required: true })
    public materialList!: Material[]

    @Prop({ required: true })
    public mechaList!: Mecha[]

    public async addWeapon(this: DocumentType<Equipment>, weaponId: number) {
        const weaponData = WeaponData.fromId(weaponId)
        if(!weaponData) throw "Invalid weaponId!"

        const weapon = {
            uniqueId: await AutoIncrement.getNextId('weapon'),
            id: weaponData.ID,
            level: 1,
            exp: 0,
            isProtected: false,
            isExtracted: false
        } as Weapon

        this.weaponList.push(weapon)
        return weapon
    }

    public async addStigmata(this: DocumentType<Equipment>, stigmataId: number) {
        const stigmataData = StigmataData.fromId(stigmataId)
        if(!stigmataData) throw "Invalid stigmataId!"

        const stigmata = {
            uniqueId: await AutoIncrement.getNextId('stigmata'),
            id: stigmataData.ID,
            level: 1,
            exp: 0,
            isProtected: false,
            slotNum: 0,
            refineValue: 0,
            promoteTimes: 0
        } as Stigmata

        this.stigmataList.push(stigmata)
        return stigmata
    }

    public addMaterial(this: DocumentType<Equipment>, materialId: number, num = 0) {
        const index = this.materialList.findIndex(({ id }) => id === materialId);
        
        if (index === -1) {
            this.materialList.push({ id: materialId, num: 1 });
        } else {
            this.materialList[index] = { ...this.materialList[index], num: (this.materialList[index].num || 0) + num };
        }
    }
}

export default getModelForClass(Equipment)