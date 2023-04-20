import { Avatar as BHAvatar } from "../../BengHuai";
import Database from "../../server/Database";
import AvatarExcel from '../../resources/ExcelOutputAsset/Avatar.json'
import AvatarSubSkillExcel from '../../resources/ExcelOutputAsset/AvatarSubSkill.json'

const database = Database.getInstance().db;
export default database.collection<Avatar>("avatar");

export const assignAvatar = async (avatarId: number, uid: number) => {
  const avatarData = AvatarExcel.find(avatar=>avatar.avatarID===avatarId)
  if(!avatarData) throw "Invalid avatar ID!"

  return database.collection<Avatar>("avatar").insertOne({
    avatarId,
    star: avatarData.unlockStar,
    level: 1,
    exp: 0,
    fragment: 0,
    weaponUniqueId: avatarData.initialWeapon,
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