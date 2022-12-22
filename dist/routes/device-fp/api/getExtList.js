"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({
        retcode: 0,
        message: "OK",
        data: {
            code: 200,
            msg: "ok",
            ext_list: [
                "cpuName",
                "deviceModel",
                "deviceName",
                "deviceType",
                "deviceUID",
                "gpuID",
                "gpuName",
                "gpuAPI",
                "gpuVendor",
                "gpuVersion",
                "gpuMemory",
                "osVersion",
                "cpuCores",
                "cpuFrequency",
                "gpuVendorID",
                "isGpuMultiTread",
                "memorySize",
                "screenSize",
                "engineName",
                "addressMAC",
            ],
            pkg_list: [],
        },
    });
}
exports.default = handler;
