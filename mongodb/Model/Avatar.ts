import { Avatar as BHAvatar, EquipmentSlot } from "../../BengHuai";
import Database from "../../server/Database";
import AvatarExcel from '../../resources/ExcelOutputAsset/Avatar.json'
import AvatarSubSkillExcel from '../../resources/ExcelOutputAsset/AvatarSubSkill.json'
import Weapon, { addWeapon } from "./Weapon";
import { UpdateFilter } from "mongodb";

const database = Database.getInstance().db;
export default database.collection<Avatar>("avatar");

export const assignAvatar = async (avatarId: number, uid: number) => {
  const avatarData = AvatarExcel.find(avatar=>avatar.avatarID===avatarId)
  if(!avatarData) throw "Invalid avatar ID!"

  const avatarWeapon = await addWeapon(uid, avatarData.initialWeapon)

  return database.collection<Avatar>("avatar").insertOne({
    avatarId,
    star: avatarData.unlockStar,
    level: 1,
    exp: 0,
    fragment: 0,
    weaponUniqueId: (await Weapon.findOne({ _id: avatarWeapon.insertedId }))?.uniqueId,
    stigmataUniqueId1: 0,
    stigmataUniqueId2: 0,
    stigmataUniqueId3: 0,
    skillList: avatarData.skillList.map(id=>({
      skillId: id,
      subSkillList: AvatarSubSkillExcel.filter(subSkill=>subSkill.skillId==id).map(subSkill=>({
        subSkillId: subSkill.avatarSubSkillId,
        level: 1,
        isMask: false
      }))
    })),
    dressList: [
        avatarData.DefaultDressId
    ],
    dressId: avatarData.DefaultDressId,
    touchGoodfeel: 0,
    userUid: uid
  })
}

export const dressEquipment = (uid: number, avatarId: number, uniqueId: number, slot: EquipmentSlot) => {
  const getUpdate = (): UpdateFilter<Avatar> => {
    switch(slot){
      case EquipmentSlot.EQUIPMENT_SLOT_WEAPON_1:
        return {
          $set: {
            weaponUniqueId: uniqueId
          }
        }
      case EquipmentSlot.EQUIPMENT_SLOT_STIGMATA_1:
        return {
          $set: {
            stigmataUniqueId1: uniqueId
          }
        }
      case EquipmentSlot.EQUIPMENT_SLOT_STIGMATA_2:
        return {
          $set: {
            stigmataUniqueId2: uniqueId
          }
        }
      case EquipmentSlot.EQUIPMENT_SLOT_STIGMATA_3:
        return {
          $set: {
            stigmataUniqueId3: uniqueId
          }
        }
      default:
        return {}
    }
  }
  return database.collection<Avatar>("avatar").findOneAndUpdate({
    userUid: uid,
    avatarId
  }, getUpdate())
}

export const assignAllAvatar = async (uid: number) => {
  const avatars = await database.collection<Avatar>("avatar").find({
    userUid: uid
  }).toArray()
  const unassignedAvatars = AvatarExcel.filter(avatar=>!avatars.some(a=>avatar.avatarID==a.avatarId))
  for (const avatarData of unassignedAvatars) {
    await assignAvatar(avatarData.avatarID, uid)
  }
}

export const removeAvatar = async (avatarId: number, uid: number) => {
  return database.collection<Avatar>("avatar").deleteMany({
    avatarId,
    userUid: uid
  })
}

export interface Avatar extends Partial<BHAvatar> {
    userUid: number
    touchGoodfeel: number
}