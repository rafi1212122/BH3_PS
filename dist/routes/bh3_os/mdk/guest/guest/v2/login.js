"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//not working!!
function handler(req, res) {
    // return res.json({
    //     "data": null,
    //     "message": "Guest login disabled!",
    //     "retcode": -110
    // })
    res.status(200).send({
        retcode: 0,
        message: "OK",
        data: null
    });
}
exports.default = handler;
