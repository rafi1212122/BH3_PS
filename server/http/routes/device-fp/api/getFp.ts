import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	return res.json({
		data: {
			code: 200,
			device_fp: req.body?.data?.device_fp||null,
			msg: "ok",
		},
		message: "OK",
		retcode: 0,
	});
}
