"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./util/logger"));
const tls_1 = __importDefault(require("tls"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use(express_1.default.json());
app.all('/admin/mi18n/plat_oversea/*', (req, res) => {
    return res.json({
        version: 67
    });
});
app.all('/*', (req, res) => {
    var _a;
    (0, logger_1.default)(`${req.method} ${req.url.split('?')[0]}`, 'warn', 'HTTP');
    (_a = `./routes${req.url.split('?')[0]}`, Promise.resolve().then(() => __importStar(require(_a)))).then((r) => __awaiter(void 0, void 0, void 0, function* () {
        yield r.default(req, res);
    })).catch(err => {
        res.json({
            code: 0
        });
        if (err.code === 'MODULE_NOT_FOUND')
            return;
        (0, logger_1.default)(err, 'danger');
    });
});
const certConfig = { key: fs_1.default.readFileSync('./certs/localhost.key').toString(), cert: fs_1.default.readFileSync('./certs/localhost.crt').toString() };
const gameServer = tls_1.default.createServer(certConfig);
gameServer.listen(config_1.default.gameServerPort, config_1.default.serverHost, () => {
    (0, logger_1.default)(`TCP server listening on port ${config_1.default.gameServerPort}`, '', 'TCP');
});
gameServer.on('connection', function (sock) {
    (0, logger_1.default)(`${sock.remoteAddress}:${sock.remotePort} Connected`, 'warn', 'TCP');
    console.log(sock);
});
https_1.default.createServer(certConfig, app).listen(443);
app.listen(80, () => {
    (0, logger_1.default)('HTTP server listening on port 80 & 443', '', 'HTTP');
});
