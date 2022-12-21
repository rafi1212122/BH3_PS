"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.status(200).json({
        data: null,
        message: "OK",
        retcode: 0,
    });
}
exports.default = handler;
