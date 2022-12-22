import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	res.json({
		retcode: 0,
		message: "OK",
		data: {
			vals: {
				list_price_tierv2_enable: "false",
				network_report_config: {
					enable: 1,
					status_codes: [206],
					url_paths: ["dataUpload", "red_dot"],
				},
				kibana_pc_config: {
					enable: 1,
					level: "Info",
					modules: ["download"],
				},
			},
		},
	});
}
