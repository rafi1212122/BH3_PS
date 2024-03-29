import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	switch (req.query.client) {
		default:
			return res.json({
				retcode: 0,
				message: "OK",
				data: {
					id: 16,
					game_key: req.query.game_key,
					client: "PC",
					identity: "I_IDENTITY",
					guest: false, // enabling guest can cause client to stuck
					ignore_versions: "",
					scene: "S_NORMAL",
					name: "崩坏3rd-东南亚",
					disable_regist: true,
					enable_email_captcha: false,
					thirdparty: [],
					disable_mmt: false,
					server_guest: false,
					thirdparty_ignore: {},
					enable_ps_bind_account: false,
					thirdparty_login_configs: {},
					initialize_firebase: false,
				},
			});
	}
}
