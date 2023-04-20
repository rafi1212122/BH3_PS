import Database from "../../server/Database";
import getTs from '../../util/getTs'

const database = Database.getInstance().db;
export default database.collection<OWSpawn>("openworld_spawn");

export const setSpawn = async (uid: number, point?: string, map_id?: number) => {
    return database.collection<OWSpawn>("openworld_spawn").updateOne({
        uid,
        map_id
    },{
        $set: {
            uid,
            point,
            map_id,
            ts: parseInt(getTs())
        }
    }, { upsert: true })
}

export const getSpawn = async (uid: number, map_id?: number) => {
    return database.collection<OWSpawn>("openworld_spawn").findOne({
        uid,
        map_id,
    })
}

export interface OWSpawn {
  uid: number
  point?: string
  map_id?: number
  ts: number
}