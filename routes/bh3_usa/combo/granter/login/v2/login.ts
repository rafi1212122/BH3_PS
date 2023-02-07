import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
    const data = JSON.parse(req.body.data)

    res.json({
        retcode: 0,
        message: "OK",
        data: {
            combo_id: "0",
            open_id: data.uid,
            combo_token: data.token,
            data: JSON.stringify({
                guest: data.guest
            }),
            heartbeat: false,
            account_type: 1,
            fatigue_remind: null
        }
    });
}