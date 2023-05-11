import Config from "../../../utils/Config"
import express, { Request, Response } from 'express'
import Logger from "../../../utils/Logger"
import { readFileSync } from "fs"
import request from 'request'
import { createServer } from "https"
import Proxy from "./Proxy"
import WSServer from "./WSServer"

const c = new Logger('HTTP', 'greenBright')

export default class Backend {
    private static instance: Backend
    private readonly app = express()

    public constructor() { 
        this.app.disable('x-powered-by');
        this.app.use(express.json({ limit: '20mb' }));
        this.app.use(express.urlencoded({ extended: true }));

        this.app.all('/query*', (req: Request, res: Response) => {
            import(__dirname + `/../../../server/http/routes${req.url.split('?')[0]}`).then(async r => {
                c.log(`${req.method} ${req.url.split('?')[0]}`)
                await r.default(req, res);
            }).catch(err => {
                res.json({
                    code: 0
                });
                c.err(`${req.method} ${req.url.split('?')[0]}`)
                if (err.code === 'MODULE_NOT_FOUND') return;
                console.log(err);
            });
        });

        this.app.all('/*', (req: Request, res: Response) => {
            c.log(`${req.method} ${req.url.split('?')[0]}`)
            if(req.hostname.startsWith("192")||req.hostname.startsWith("127")||req.hostname=='localhost'||req.hostname.startsWith(Config.GAMESERVER.HOST)) return res.json({ code: 0 })
            request({ url: `${req.protocol}://${req.hostname}${req.url}`, method: req.method, body: String(req.body) }).pipe(res)
        });
    }
    
    public static getInstance(): Backend {
        return this.instance ??= new Backend()
    }

    public async bootstrap() {
        if(Config.PROXY.START_DISPATCH) {
            createServer({ key: readFileSync('certs/localhost.key').toString(), cert: readFileSync('certs/localhost.crt').toString() }, this.app).listen(Config.HTTP.HTTPS_PORT);
            this.app.listen(Config.HTTP.HTTP_PORT, () => {
                c.log(`HTTP server listening on port ${Config.HTTP.HTTP_PORT} & ${Config.HTTP.HTTPS_PORT}`)
            });
        }
        Proxy.getInstance().start()
        WSServer.getInstance()
    }
}