"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({ retcode: 0, message: "OK", data: { list: [] } });
}
exports.default = handler;
