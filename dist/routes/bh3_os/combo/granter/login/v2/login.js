"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    const data = JSON.parse(req.body.data);
    res.json({
        retcode: 0,
        message: "OK",
        data: {
            combo_id: "1",
            open_id: data.uid,
            combo_token: data.token,
            data: JSON.stringify({
                guest: data.guest
            }),
            heartbeat: false,
            account_type: 1,
            fatigue_remind: null
        }
    });
}
exports.default = handler;
