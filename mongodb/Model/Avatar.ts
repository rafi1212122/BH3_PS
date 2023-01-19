import { Avatar as BHAvatar } from "../../BengHuai";
import Database from "../../server/Database";

const database = Database.getInstance().db;
export default database.collection<Avatar>("avatar");

export const assignAvatar = async (avatarId: number, uid: number) => {
  return database.collection<Avatar>("avatar").insertOne({
    avatarId,
    star: 4,
    level: 80,
    exp: 0,
    fragment: 19,
    weaponUniqueId: 0,
    stigmataUniqueId1: 0,
    stigmataUniqueId2: 0,
    stigmataUniqueId3: 0,
    skillList: [],
    dressList: [
        parseInt(`59${avatarId}`)
    ],
    dressId: parseInt(`59${avatarId}`),
    touchGoodfeel: 0,
    userUid: uid
  })
}

export interface Avatar extends Partial<BHAvatar> {
    userUid: number
    touchGoodfeel: number
}