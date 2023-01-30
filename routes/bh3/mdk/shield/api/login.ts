import cuid from "cuid";
import { Request, Response } from "express";
import User, { createUser } from "../../../../../mongodb/Model/User";

export default async function handler(req: Request, res: Response) {
    if(!req.body.account) return res.status(404).json({ code: 0 })

    let user
    user = await User.findOne({
		name: req.body.account
    })
    if(!user){
		try {
			user = await User.findOne({
				_id: (await createUser(req.body.account)).insertedId
			})
			if(!user){
				throw user
			}
		} catch (error) {
			console.log(error)
			return res.status(404).json({ code: 0 })
		}
    }

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
			reactivate_required: false,
			realname_operation: "None",
		},
	});
}
