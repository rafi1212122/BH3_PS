import Database from "../../server/Database";
import crypto from 'crypto'
import cuid from "cuid";
import PlayerLevelExcel from '../../resources/ExcelOutputAsset/PlayerLevel.json'

const database = Database.getInstance().db;
export default database.collection<User>("user");

export const createUser = async (name: string) => {
  return database.collection<User>("user").insertOne({
    uid: crypto.randomInt(10000000, 99999999),
    name: name,
    level: 1,
    exp: 0,
    hcoin: 0,
    scoin: 0,
    stamina: 80,
    selfDesc: "",
    isFirstLogin: true,
    token: cuid(),
    warshipId: 0,
    warshipFirstAvatarId: 101,
    assistantAvatarId: 101,
  })
}

export const addExp = async (uid: number, exp: number): Promise<{ newLevel: number; oldLevel: number; newExp: number; }> => {
  const user = await database.collection<User>("user").findOne({
    uid
  })
  if(!user) throw "user not found!"
  const upcomingLevels = PlayerLevelExcel.filter(lvl=>lvl.level>=user.level)
  if(!upcomingLevels.length){
    return{
      oldLevel: user.level,
      newLevel: user.level,
      newExp: user.exp
    }
  }
  let newLevel = user.level
  let oldLevel = user.level
  let currExp = user.exp+exp
  for (const level of upcomingLevels) {
    if(currExp>level.exp){
      currExp -= level.exp
      if(newLevel<88) newLevel++
    }else {
      break
    }
  }
  await database.collection<User>("user").findOneAndUpdate({
    uid
  }, {
    $set: {
      level: newLevel,
      exp: currExp
    }
  }, { returnDocument: "after" })
  return {
    oldLevel,
    newLevel,
    newExp: currExp
  }
}

export interface User {
  uid: number
  name: string
  nick?: string
  level: number
  exp: number
  hcoin: number
  scoin: number
  stamina: number
  selfDesc: string
  isFirstLogin: boolean
  token?: string
  warshipId: number
  warshipFirstAvatarId: number
  assistantAvatarId: number
  birthDate?: number
}