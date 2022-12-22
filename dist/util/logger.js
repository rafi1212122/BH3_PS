"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function log(msg, type, title) {
    switch (type) {
        case "danger":
            return console.log(`[${new Date().toLocaleTimeString()}] <${chalk_1.default.red(title ? title : 'ERROR')}> ${chalk_1.default.whiteBright(msg)}`);
        case "warn":
            return console.log(`[${new Date().toLocaleTimeString()}] <${chalk_1.default.yellow(title ? title : 'WARN')}> ${chalk_1.default.whiteBright(msg)}`);
        default:
            return console.log(`[${new Date().toLocaleTimeString()}] <${chalk_1.default.whiteBright(title ? title : 'ANY')}> ${chalk_1.default.whiteBright(msg)}`);
    }
}
exports.default = log;
