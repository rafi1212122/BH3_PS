"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaConnect_1 = require("../../../../../util/prismaConnect");
// Example request:
// {"uid":"63884253","token":"ZQmgMdXA1StL9A3aPBUedr8yoiuoLrmV"}
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prismaConnect_1.prisma.user.findFirst({
            where: {
                uid: req.body.uid,
            },
        });
        if (!user) {
            return res.json({
                retcode: -202,
                message: "Account not found",
                data: {
                    account: {},
                },
            });
        }
        else {
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
                            country: "ID,,
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
            }
            else {
                return res.json({
                    retcode: -202,
                    message: "Invalid token!",
                    data: {
                        account: {},
                    },
                });
            }
        }
    });
}
exports.default = handler;
