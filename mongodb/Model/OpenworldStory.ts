import Database from "../../server/Database";
import getTs from '../../util/getTs'

const database = Database.getInstance().db;
export default database.collection<OWStory>("openworld_story");

export const setStory = async (uid: number, storyId: number, progress = 0, isFinished = false) => {
    return database.collection<OWStory>("openworld_story").updateOne({
        uid,
        storyId
    },{
        $set: {
            uid,
            storyId,
            progress,
            isFinished
        },
        $setOnInsert: {
            acceptTime: parseInt(getTs()),
        }
    }, { upsert: true })
}

export const getAllStory = async (uid: number) => {
    return await (database.collection<OWStory>("openworld_story").find({
        uid,
    })).toArray()
}

export interface OWStory {
  uid: number
  storyId: number
  progress: number
  acceptTime: number
  isFinished: boolean
}