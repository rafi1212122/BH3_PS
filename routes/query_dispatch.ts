import { Request, Response } from "express";
import config from "../config";
import { getGatewayExt } from "./query_gateway";

export default function handler(req: Request, res: Response) {
	return res.send(JSON.stringify({
		region_list: [
			{
				dispatch_url: `https://${config.serverHost}/query_gateway`,
				ext: getGatewayExt(String(req.query.version)),
				name: config.regionName,
				retcode: 0,
				title: "",
			},
		],
		retcode: 0,
	}));
}
