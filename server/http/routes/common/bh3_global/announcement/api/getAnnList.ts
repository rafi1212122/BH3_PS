import { Request, Response } from "express";
import { unixInSeconds } from "../../../../../../../utils";

export default function handler(req: Request, res: Response) {
	return res.json({
		retcode: 0,
		message: "OK",
		data: {
			list: [],
			total: 0,
			type_list: [
				{ id: 2, name: "活动", mi18n_name: "Event" },
				{ id: 1, name: "游戏公告", mi18n_name: "Pengumuman" },
				{ id: 3, name: "新闻", mi18n_name: "Berita" },
			],
			alert: false,
			alert_id: 0,
			timezone: 8,
			t: unixInSeconds,
			pic_list: [],
			pic_total: 0,
			pic_type_list: [],
			pic_alert: false,
			pic_alert_id: 0,
			static_sign: "",
		},
	});
}
