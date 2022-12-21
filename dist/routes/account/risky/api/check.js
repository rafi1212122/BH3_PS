"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            id: "",
            action: "ACTION_NONE",
            geetest: null
        }
    });
}
exports.default = handler;
