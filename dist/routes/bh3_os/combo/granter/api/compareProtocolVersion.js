"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    // Test handler
    res.json({
        retcode: 0,
        message: "OK",
        data: {
            modified: true,
            protocol: {
                id: 0,
                app_id: 8,
                language: "id",
                user_proto: "",
                priv_proto: "",
                major: 0,
                minimum: 3,
                create_time: "0",
                teenager_proto: "",
                third_proto: "",
            },
        },
    });
}
exports.default = handler;
