import acfg from "acfg";
import { hostname } from "os";

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
        HOST: hostname(),
        PORT: 16100,
        REGION_NAME: "overseas01"
    },

    PROXY: {
        USE_PROXY: false,
        REMOTE_HOST: "127.0.0.1",
        REMOTE_PORT: 16100,
        LOCAL_PORT: 16101,
        WS_PORT: 6060,
        START_DISPATCH: true
    },

    DB_URL: "mongodb://localhost:27017/BH3_PS"
}, { logMissing: true })