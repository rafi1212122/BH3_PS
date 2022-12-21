import express, { Request, Response } from 'express'
import https from 'https'
import fs from 'fs'

const app = express();

app.disable('x-powered-by');
app.use(express.json());

app.all('/*', (req: Request, res: Response) => {
    import(`./routes${req.url.split('?')[0]}`).then(async r => {
        await r.default(req, res);
    }).catch(err => {
        res.json({
            code: 0
        });
        if (err.code === 'MODULE_NOT_FOUND') return;
        console.error(err);
    });
});

https.createServer({ key: fs.readFileSync('./certs/cert.key').toString(), cert: fs.readFileSync('./certs/cert.crt').toString() }, app).listen(443);
app.listen(80, () => {
    console.log(`Listening on port 80`);
});