import { Request, Response } from "express"
import { CmdId } from "../util/CmdId"

export default function handler(req: Request, res: Response){
    res.send("GET LOG")
}