import { Request, Response } from "express";
import { getGatewayExt } from "./query_gateway";
import Config from "../../../utils/Config";

export default function handler(req: Request, res: Response) {
	return res.send(JSON.stringify({
		region_list: [
			{
				dispatch_url: `http://${Config.GAMESERVER.HOST}/query_gateway`,
				ext: getGatewayExt(String(req.query.version)),
				name: Config.GAMESERVER.REGION_NAME,
				retcode: 0,
				title: "",
			},
		],
		retcode: 0,
	}));
}
