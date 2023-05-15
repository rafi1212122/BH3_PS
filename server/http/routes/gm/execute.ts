import { Request, Response } from "express";
import Gameserver from "../../../tcp/Gameserver";

export default function handler(req: Request, res: Response) {
    let session_id: string = req.body.session_id
    let cmd: string = req.body.cmd

    if(!session_id&&!cmd) {
        session_id = String(req.query.session_id)
        cmd = String(req.query.cmd)
    }

    const session = Gameserver.getInstance().sessions.get(Array.isArray(session_id) ? session_id.pop() as string : session_id as string)

    if(!cmd||!session) {
        return res.status(400).json({ retcode: 1, msg: "Invalid parameter!, session may be invalid" })
    }
    
    let args = (cmd as string).split(' ') || []
    const command = args.shift()

    import(__dirname + `/../../../commands/${command}`).then(async r => {
        await r.default(session, ...args);
    }).then(() => {
        return res.status(200).json({ retcode: 0, msg: "Success!" })
    }).catch(err => {
        return res.status(400).json({ retcode: 2, msg: typeof err === 'string' ? err : "Command failed to execute!" })
    })
}