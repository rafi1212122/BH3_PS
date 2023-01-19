import logger from '../util/logger'
import { MongoClient } from 'mongodb'
import config from '../config'

export default class Database{
    private static instance: Database
    private readonly mongoInstance = new MongoClient(config.mongodbUrl)

    get db(){
        return this.mongoInstance.db('BH3_PS')
    }

    public static getInstance(): Database {
        if(!Database.instance) Database.instance = new Database()
        return Database.instance
    }

    public async initialize() {
        await this.mongoInstance.connect()
        logger('Database connected successfully!', undefined, 'DB')
    }
}