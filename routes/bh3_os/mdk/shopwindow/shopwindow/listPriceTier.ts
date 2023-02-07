import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	return res.json({
		retcode: 0,
		message: "OK",
		data: { suggest_currency: "IDR", tiers: [], price_tier_version: "0" },
	});
}
