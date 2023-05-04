import { DocumentType, ModelOptions, Prop, Severity, getModelForClass } from "@typegoose/typegoose";
import { Material, Mecha, Stigmata, Weapon } from "../resources/proto/BengHuai";
import WeaponData from "../utils/excel/WeaponData";
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
        }

        this.weaponList.push(weapon)
        return weapon
    }
}

export default getModelForClass(Equipment)