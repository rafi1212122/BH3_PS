import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	return res.status(200).json({
		data: null,
		message: "OK",
		retcode: 0,
	});
}
