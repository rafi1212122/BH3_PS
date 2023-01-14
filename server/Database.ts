import logger from '../util/logger'
import { MongoClient } from 'mongodb'

export default class Database{
    private static instance: Database
    private readonly mongoInstance = new MongoClient('mongodb://127.0.0.1:27017/BH3')

    get db(){
        return this.mongoInstance.db('BH3_PS')
    }

    public static getInstance(): Database {
        if(!Database.instance) Database.instance = new Database()
        return Database.instance
    }

    public async initialize() {
        await this.mongoInstance.connect()
        logger('Database connected successfully!', 'DB')
    }
}