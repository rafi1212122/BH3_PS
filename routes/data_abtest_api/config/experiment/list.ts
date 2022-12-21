import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
    return res.json({
        retcode: 0,
        success: true,
        message: "",
        data: []
    });
}