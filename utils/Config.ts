import acfg from "acfg";

export enum VerboseLevel {
    NORMAL = 0,
    DEBUG = 1,
}

export default acfg({
    LOG_LEVEL: VerboseLevel.NORMAL,
    
    HTTP: {
        HTTP_PORT: 80,
        HTTPS_PORT: 443
    },

    GAMESERVER: {
        HOST: require('os').hostname(),
        PORT: 16100,
        REGION_NAME: "overseas01"
    },

    DB_URL: "mongodb://localhost:27017/BH3_PS"
}, { logMissing: true })