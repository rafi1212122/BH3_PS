"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTs_1 = __importDefault(require("../../../../../util/getTs"));
function handler(req, res) {
    return res.json({
        retcode: 0,
        message: "OK",
        data: {
            suggest_currency: "",
            tiers: [],
            price_tier_version: (0, getTs_1.default)(),
        },
    });
}
exports.default = handler;
