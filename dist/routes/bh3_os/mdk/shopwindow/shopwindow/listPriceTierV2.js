"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({
        retcode: 0,
        message: "OK",
        data: {
            suggest_currency: "",
            tiers: [],
            price_tier_version: Math.round(new Date().getTime() / 1000).toString(),
        },
    });
}
exports.default = handler;
