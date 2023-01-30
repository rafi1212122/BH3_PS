import { Request, Response } from "express";
import config from "../config";
import { gatewayExt } from "./query_gateway";

export default function handler(req: Request, res: Response) {
	return res.send(JSON.stringify({
		region_list: [
			{
				dispatch_url:
					`https://${config.serverHost}/query_gateway`,
				ext: gatewayExt,
				name: config.regionName,
				retcode: 0,
				title: config.regionName,
			},
		],
		retcode: 0,
	}));
}
