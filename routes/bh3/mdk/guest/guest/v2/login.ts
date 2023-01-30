import { Request, Response } from "express";

//not working!!

export default function handler(req: Request, res: Response) {
    // return res.json({
    //     "data": null,
    //     "message": "Guest login disabled!",
    //     "retcode": -110
    // })

    res.status(200).send({
        retcode: 0,
        message: "OK",
        data: null
    });
}