"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    var _a, _b;
    return res.json({
        data: {
            code: 200,
            device_fp: ((_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.device_fp) || null,
            msg: "ok",
        },
        message: "OK",
        retcode: 0,
    });
}
exports.default = handler;
