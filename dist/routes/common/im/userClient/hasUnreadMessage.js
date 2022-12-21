"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({
        retcode: 0,
        message: "OK",
        data: { data: false, ccs_new_msg: false },
    });
}
exports.default = handler;
