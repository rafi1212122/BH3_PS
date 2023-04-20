import Database from "../../server/Database";
import WeaponExcel from '../../resources/ExcelOutputAsset/Weapon.json'

const database = Database.getInstance().db;
export default database.collection<WeaponScheme>("weapon");

export const addWeapon = (uid: number, id: number) => {
    if(!WeaponExcel.map(w=>w.ID).includes(id)) throw "Invalid Weapon ID"
    return database.collection<WeaponScheme>("weapon").insertOne({
        uniqueId: parseInt(`${id}${new Date().getTime().toString().slice(-5)}`),
        id,
        level: 1,
        exp: 0,
        isExtracted: false,
        isProtected: false,
        uid,
    })
}

export const getWeapons = async (uid: number) => {
    return await database.collection<WeaponScheme>("weapon").find({
        uid
    }).toArray()
}

export interface WeaponScheme {
    uniqueId: number,
    id: number,
    level: number,
    exp: number,
    isProtected: boolean,
    isExtracted: boolean,
    uid: number
}