import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	return res.json({
		retcode: 0,
		message: "OK",
		data: { alert: false, alert_id: 0, remind: false, extra_remind: false },
	});
}
