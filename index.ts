import express, { Request, Response } from 'express'
import https from 'https'
import fs from 'fs'
import logger from './util/logger'
import tls from 'tls'
import config from './config'

const app = express();

app.disable('x-powered-by');
app.use(express.json());

app.all('/admin/mi18n/plat_oversea/*', (req: Request, res: Response) => {
    return res.json({
        version: 67
    })
})

app.all('/*', (req: Request, res: Response) => {
    logger(`${req.method} ${req.url.split('?')[0]}`, 'warn', 'HTTP')
    import(`./routes${req.url.split('?')[0]}`).then(async r => {
        await r.default(req, res);
    }).catch(err => {
        res.json({
            code: 0
        });
        if (err.code === 'MODULE_NOT_FOUND') return;
        logger(err, 'danger');
    });
});

const certConfig = { key: fs.readFileSync('./certs/localhost.key').toString(), cert: fs.readFileSync('./certs/localhost.crt').toString() }

const gameServer = tls.createServer(certConfig)
gameServer.listen(config.gameServerPort, config.serverHost, () => {
    logger(`TCP server listening on port ${config.gameServerPort}`, '', 'TCP')
})

gameServer.on('connection', function(sock) {
    logger(`${sock.remoteAddress}:${sock.remotePort} Connected`, 'warn', 'TCP');
    console.log(sock);
});

https.createServer(certConfig, app).listen(443);
app.listen(80, () => {
    logger('HTTP server listening on port 80 & 443', '', 'HTTP')
});