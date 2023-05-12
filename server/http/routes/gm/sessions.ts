import { Request, Response } from "express";
import Gameserver from "../../../tcp/Gameserver";

export default function handler(req: Request, res: Response) {
    const { sessions } = Gameserver.getInstance()

	return res.json(Array.from(sessions).map(i => ({ id: i[0], uid: i[1].player.user.uid })));
}