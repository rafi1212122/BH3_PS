import { Request, Response } from "express";
import Gameserver from "../../../tcp/Gameserver";
import Player from "../../../tcp/game/Player";
import User from "../../../../model/User";

export default async function handler(req: Request, res: Response) {
    let session_id: string = req.body.session_id
    let cmd: string = req.body.cmd
    let uid: string = req.body.uid

    if(!session_id&&!cmd) {
        session_id = String(req.query.session_id)
        cmd = String(req.query.cmd)
        uid = String(req.query.uid)
    }

    const session = Gameserver.getInstance().sessions.get(Array.isArray(session_id) ? session_id.pop() as string : session_id as string)
    let player: Player | undefined

    // i know what im doing... i think
    
    if(!cmd||!session) {
        if(req.query.uid||req.body.uid) {
            try {
                player = await User.playerFromUID(parseInt(uid))
            } catch (error) {
                return res.status(400).json({ retcode: 1, msg: error })
            }
        }
        if(!player) return res.status(400).json({ retcode: 1, msg: "Invalid parameter!, session may be invalid" })
    }
    
    let args = (cmd as string).split(' ') || []
    const command = args.shift()

    import(__dirname + `/../../../commands/${command}`).then(async r => {
        await r.default(session || player, ...args); // please dont break
    }).then(() => {
        return res.status(200).json({ retcode: 0, msg: "Success!" })
    }).catch(err => {
        return res.status(400).json({ retcode: 2, msg: typeof err === 'string' ? err : "Command failed to execute!" })
    })
}