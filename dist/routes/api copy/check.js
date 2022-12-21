"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example request:
// {
//     "action_type": "login",
//     "api_name": "/shield/api/login",
//     "username": "test"
// }
function handle(req, res) {
    // Test handler
    res.send({
        retcode: 0,
        message: "OK",
        data: {
            id: "",
            action: "ACTION_NONE",
            geetest: null
        }
    });
}
exports.default = handle;
