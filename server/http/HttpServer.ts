import express, { Request, Response } from 'express'
import Logger from '../../utils/Logger'
import https from 'https'
import fs from 'fs'
import cors from 'cors'
import Config from '../../utils/Config'

const c = new Logger('HTTP', 'greenBright')

export default class HttpServer {
    private readonly app = express();
    public readonly objCache = new Map<string, any>()
    private static instance: HttpServer

    private constructor() {
        this.app.disable('x-powered-by');
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static('resources/cache'))

        this.app.all('/admin/mi18n/plat*', (req: Request, res: Response) => {
            return res.json({
                version: 67
            })
        })

        this.app.all('/*', (req: Request, res: Response) => {
            import(`./routes${req.url.split('?')[0]}`).then(async r => {
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
    }

    public static getInstance(): HttpServer {
        return this.instance ??= new HttpServer()
    }

    public start() {
        https.createServer({ key: fs.readFileSync('certs/localhost.key').toString(), cert: fs.readFileSync('certs/localhost.crt').toString() }, this.app).listen(Config.HTTP.HTTPS_PORT);
        this.app.listen(Config.HTTP.HTTP_PORT, () => {
            c.log(`HTTP server listening on port ${Config.HTTP.HTTP_PORT} & ${Config.HTTP.HTTPS_PORT}`)
        });
    }
}