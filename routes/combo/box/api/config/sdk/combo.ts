import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
    res.json({
        data: null,
        message: "RetCode_NoConfig",
        retcode: 7
    });
}