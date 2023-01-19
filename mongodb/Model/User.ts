import Database from "../../server/Database";
import crypto from 'crypto'
import cuid from "cuid";

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