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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuid_1 = __importDefault(require("cuid"));
const prismaConnect_1 = require("../../../../../util/prismaConnect");
function handler(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.account)
            return res.status(404).json({ code: 0 });
        let user;
        user = yield prismaConnect_1.prisma.user.findFirst({
            where: {
                name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.account
            }
        });
        if (!user) {
            user = yield prismaConnect_1.prisma.user.create({
                data: {
                    name: (_b = req.body) === null || _b === void 0 ? void 0 : _b.account,
                    token: (0, cuid_1.default)()
                }
            });
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
                reactivate_required: false,
                realname_operation: "None",
            },
        });
    });
}
exports.default = handler;
