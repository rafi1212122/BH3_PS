import { Request, Response } from "express";
import config from "../../../../../config";

export default function handler(req: Request, res: Response) {
	return res.json({
		retcode: 0,
		message: "OK",
		data: {
			protocol: true,
			qr_enabled: false,
			log_level: "DEBUG",
			announce_url: "https://sdk.hoyoverse.com/bh3/announcement/index.html?sdk_presentation_style=fullscreen&sdk_screen_transparent=true&auth_appid=announcement&authkey_ver=1&sign_type=2&game_biz=bh3_global&game=bh3#/",
			push_alias_type: 2,
			disable_ysdk_guard: false,
			enable_announce_pic_popup: false,
			app_name: config.regionName,
			qr_enabled_apps: { bbs: false, cloud: false },
			qr_app_icons: { app: "", bbs: "", cloud: "" },
			qr_cloud_display_name: "",
		},
	});
}
