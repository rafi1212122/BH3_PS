"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({
        retcode: 0,
        message: "OK",
        data: { suggest_currency: "IDR", tiers: [], price_tier_version: "0" },
    });
}
exports.default = handler;
