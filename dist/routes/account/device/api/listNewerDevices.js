"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            devices: [],
            latest_id: "0",
        },
    });
}
exports.default = handler;
