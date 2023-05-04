import { Request, Response } from "express";
import getTs from '../../../../../util/getTs'

//https://sg-public-api.hoyoverse.com/common/bh3_global/announcement/api/getAnnList?game=bh3&game_biz=bh3_global&lang=id&auth_appid=announcement&authkey_ver=1&bundle_id=bh3_os&channel_id=1&level=87&platform=pc&region=overseas01&sdk_presentation_style=fullscreen&sdk_screen_transparent=true&sign_type=2&uid=18686438

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
			t: getTs(),
			pic_list: [],
			pic_total: 0,
			pic_type_list: [],
			pic_alert: false,
			pic_alert_id: 0,
			static_sign: "",
		},
	});
}
