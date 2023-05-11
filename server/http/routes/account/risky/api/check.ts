import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
    return res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            id: "",
            action: "ACTION_NONE",
            geetest: null
        }
    });
}