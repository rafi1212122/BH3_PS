import { Request, Response } from "express";
import User from "../../../../../mongodb/Model/User";
// Example request:
// {"uid":"63884253","token":"ZQmgMdXA1StL9A3aPBUedr8yoiuoLrmV"}

export default async function handler(req: Request, res: Response) {
	const user = await User.findOne({
		uid: parseInt(req.body.uid),
	});
	if (!user) {
		return res.json({
			retcode: -202,
			message: "Account not found",
			data: {
				account: {},
			},
		});
	} else {
		if (user.token === req.body.token) {
			return res.json({
				retcode: 0,
				message: "OK",
				data: {
					account: {
						uid: user.uid,
						name: user.name,
						email: "",
						mobile: "",
						is_email_verify: "0",
						realname: "",
						identity_card: "",
						token: user.token,
						safe_mobile: "",
						facebook_name: "",
						google_name: "",
						twitter_name: "",
						game_center_name: "",
						apple_name: "",
						sony_name: "",
						tap_name: "",
						country: "ID",
						reactivate_ticket: "",
						area_code: "**",
						device_grant_ticket: "",
						steam_name: "",
						unmasked_email: "",
						unmasked_email_type: 0,
					},
					device_grant_required: false,
					safe_moblie_required: false,
					realperson_required: false,
					realname_operation: "None",
				},
			});
		} else {
			return res.json({
				retcode: -202,
				message: "Invalid token!",
				data: {
					account: {},
				},
			});
		}
	}
}
