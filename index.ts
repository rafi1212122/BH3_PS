import mongoose from 'mongoose'
import HttpServer from './server/http/HttpServer'
import Logger from './utils/Logger'
import Config from './utils/Config'
import Gameserver from './server/tcp/Gameserver'

const c = new Logger('GLOBAL')
c.log("Staring server...")

mongoose.connect(Config.DB_URL).then(() => { 
    new Logger('DB', 'yellowBright').log("Database connected!")
})
HttpServer.getInstance().start()
Gameserver.getInstance().start()