import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
    return res.json({
		account_url: "http://account.os.honkaiimpact3.com/",
		account_url_backup: "http://47.74.172.213/",
		asset_bundle_url_list: [
			"https://hk-bundle-os-mihayo.akamaized.net/asset_bundle/overseas01/1.1",
		],
		ex_audio_and_video_url_list: [],
		ex_resource_url_list: [
			"hk-bigfile-os-mihayo.akamaized.net/com.miHoYo.bh3oversea",
		],
		ext: null,
		is_data_ready: false,
		msg: "ä¸å…è®¸å®¢æˆ·ç«¯()è¿žå…¥å½“å‰åˆ†åŒº",
		oaserver_url: "http://overseas01.honkaiimpact3.com:1080",
		region_name: "overseas01",
		retcode: 1,
		server_cur_time: 1671606354,
		server_cur_timezone: 8,
		server_ext: {
			cdkey_url: "https://sg-public-api.hoyoverse.com/common/",
			mihoyo_sdk_env: "2",
		},
	});
}
