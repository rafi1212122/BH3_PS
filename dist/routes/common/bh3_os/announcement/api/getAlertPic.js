"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({ retcode: 0, message: "OK", data: { total: 0, list: [] } });
}
exports.default = handler;
