import { DocumentType, ModelOptions, Prop, Severity, getModelForClass } from "@typegoose/typegoose";
import { EquipmentItem, EquipmentType, Material, Mecha, Stigmata, Weapon } from "../resources/proto/BengHuai";
import WeaponData from "../utils/excel/WeaponData";
import StigmataData from "../utils/excel/StigmataData";
import AutoIncrement from "./AutoIncrement";
import MaterialData from "../utils/excel/MaterialData";
import EquipmentLevelData from "../utils/excel/EquipmentLevelData";

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
        const materialData = MaterialData.fromId(materialId)
        if(!materialData) throw "Invalid materialId!"
        
        const index = this.materialList.findIndex(({ id }) => id === materialId);
        
        if (index === -1) {
            this.materialList.push({ id: materialId, num });
        } else {
            const newNum = (this.materialList[index].num || 0) + num
            this.materialList[index] = { ...this.materialList[index], num: newNum >= materialData.quantityLimit ? materialData.quantityLimit : newNum };
        }

        return this
    }

    public addWeaponExpFromItemList(this: DocumentType<Equipment>, weaponId: number, consumeItemList: EquipmentItem[]) {
        const index = this.weaponList.findIndex(({ uniqueId }) => uniqueId === weaponId)

        if (index === -1) {
            throw "Please make a github issue, and describe how to reproduce."
        } else {
            for (const consumeItem of consumeItemList) {
                const materialData = MaterialData.fromId(consumeItem.idOrUniqueId || -1)
                this.weaponList[index] = this.addWeaponExp(this.weaponList[index], (materialData?.gearExpProvideBase || 0) * (consumeItem.num || 0))                
                if(consumeItem.idOrUniqueId) this.addMaterial(consumeItem.idOrUniqueId, -(consumeItem.num || 0))
            }
        }

        return this.weaponList[index]
    }

    public addStigmataExpFromItemList(this: DocumentType<Equipment>, stigmataId: number, consumeItemList: EquipmentItem[]) {
        const index = this.stigmataList.findIndex(({ uniqueId }) => uniqueId === stigmataId)

        if (index === -1) {
            throw "Please make a github issue, and describe how to reproduce."
        } else {
            for (const consumeItem of consumeItemList) {
                const materialData = MaterialData.fromId(consumeItem.idOrUniqueId || -1)
                this.stigmataList[index] = this.addStigmataExp(this.stigmataList[index], (materialData?.gearExpProvideBase || 0) * (consumeItem.num || 0))                
                if(consumeItem.idOrUniqueId) this.addMaterial(consumeItem.idOrUniqueId, -(consumeItem.num || 0))
            }
        }

        return this.stigmataList[index]
    }

    public addWeaponExp(this: DocumentType<Equipment>, weapon: Weapon, exp: number) {
        const weaponData = WeaponData.fromId(weapon.id || -1)
        if(!weaponData) throw "Invalid weaponId!"
        
        let expRemain = exp

        while (expRemain) {
            const equipmentLevelData = EquipmentLevelData.fromLevel(weapon.level || -1)
            if(!equipmentLevelData) throw "Invalid level!"
            
            if(typeof weapon.exp === 'undefined') weapon.exp = 0

            if (weapon.level && weapon.exp + expRemain >= equipmentLevelData.Type1[weaponData.expType]) {
                if (weapon.level < weaponData.maxLv) {
                    weapon.level++
                    expRemain -= equipmentLevelData.Type1[weaponData.expType]
                } else {
                    weapon.exp = equipmentLevelData.Type1[weaponData.expType]
                    expRemain = 0
                }
            }else {
                weapon.exp += expRemain
                expRemain = 0
            }
        }

        return weapon
    }

    public addStigmataExp(this: DocumentType<Equipment>, stigmata: Stigmata, exp: number) {
        const stigmataData = StigmataData.fromId(stigmata.id || -1)
        if(!stigmataData) throw "Invalid stigmataId!"
        
        let expRemain = exp

        while (expRemain) {
            const equipmentLevelData = EquipmentLevelData.fromLevel(stigmata.level || -1)
            if(!equipmentLevelData) throw "Invalid level!"
            
            if(typeof stigmata.exp === 'undefined') stigmata.exp = 0

            if (stigmata.level && stigmata.exp + expRemain >= equipmentLevelData.Type1[stigmataData.expType]) {
                if (stigmata.level < stigmataData.maxLv) {
                    stigmata.level++
                    expRemain -= equipmentLevelData.Type1[stigmataData.expType]
                } else {
                    stigmata.exp = equipmentLevelData.Type1[stigmataData.expType]
                    expRemain = 0
                }
            }else {
                stigmata.exp += expRemain
                expRemain = 0
            }
        }

        return stigmata
    }

    public disjoinEquipment(this: DocumentType<Equipment>, type: EquipmentType, uniqueIdList: number[]) {
        switch (type) {
            case EquipmentType.EQUIPMENT_STIGMATA:
                for (const uniqueId of uniqueIdList) {
                    const stigmata = this.stigmataList.find(stigmata => stigmata.uniqueId === uniqueId)
                    if (!stigmata || !stigmata.id) continue;
                    const stigmataData = StigmataData.fromId(stigmata.id)
                    if(!stigmataData) throw "Invalid stigmataId!"
                    
                    this.addMaterial(100, -stigmataData.disjoinScoinCost)
                    for (const addMaterial of stigmataData.disjoinAddMaterial) {
                        this.addMaterial(addMaterial.ID, addMaterial.Num)
                    }

                }
                this.stigmataList = this.stigmataList.filter(stig => !uniqueIdList.includes(stig.uniqueId || 0))
                break;
            default:
                throw "Not yet implemented. Please make a github issue, and describe how to reproduce."
        }
    }
}

export default getModelForClass(Equipment)