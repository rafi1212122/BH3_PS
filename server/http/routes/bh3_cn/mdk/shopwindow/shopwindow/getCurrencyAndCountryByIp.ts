import { Request, Response } from "express";
import { unixInSeconds } from "../../../../../../../utils";

export default function handler(req: Request, res: Response) {
	return res.json({
		retcode: 0,
		message: "OK",
		data: {
			currency: "IDR",
			country: "ID",
			price_tier_version: unixInSeconds,
		},
	});
}
