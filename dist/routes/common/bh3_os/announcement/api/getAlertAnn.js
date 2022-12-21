"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({
        retcode: 0,
        message: "OK",
        data: { alert: false, alert_id: 0, remind: false, extra_remind: false },
    });
}
exports.default = handler;
