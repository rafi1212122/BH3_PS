import Database from "../../server/Database";
import { ClientDataType } from "../../BengHuai";

const database = Database.getInstance().db;
export default database.collection<ClientData>("client_data");

export const SetClientData = async (uid: number, type: ClientDataType, data: string, id?: number) => {
  return database.collection<ClientData>("client_data").updateOne({
    uid,
    type,
    id
  },{
    $set: {
        id,
        data,
        type,
        uid
    }
  }, { upsert: true })
}

export const getClientData = async (uid: number, type: ClientDataType, id?: number) => {
  return database.collection<ClientData>("client_data").findOne({
    uid,
    type,
    id
  })
}

export interface ClientData {
  uid: number
  data: string
  type: ClientDataType
  id: number
}