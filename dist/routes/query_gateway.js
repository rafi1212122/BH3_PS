"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const getTs_1 = __importDefault(require("../util/getTs"));
function handler(req, res) {
    return res.json({
        account_url: `http://${config_1.default.serverHost}/account`,
        account_url_backup: `http://${config_1.default.serverHost}/account`,
        asset_bundle_url_list: [
            "https://hk-bundle-os-mihayo.akamaized.net/asset_bundle/overseas01/1.1",
            "https://bundle-aliyun-os.honkaiimpact3.com/asset_bundle/overseas01/1.1",
        ],
        ex_audio_and_video_url_list: [],
        ex_resource_url_list: [
            "hk-bigfile-os-mihayo.akamaized.net/com.miHoYo.bh3oversea",
            "bigfile-aliyun-os.honkaiimpact3.com/com.miHoYo.bh3oversea",
        ],
        ext: {
            ai_use_asset_boundle: "1",
            apm_log_dest: "2",
            apm_log_level: "0",
            apm_switch: "1",
            apm_switch_crash: "1",
            apm_switch_game_log: "1",
            block_error_dialog: "1",
            elevator_model_path: "GameEntry/EVA/StartLoading_Model",
            ex_res_buff_size: "10485760",
            ex_res_pre_publish: "0",
            ex_res_use_http: "1",
            ex_resource_url_list: [
                "hk-bigfile-os-mihayo.akamaized.net/com.miHoYo.bh3oversea",
                "bigfile-aliyun-os.honkaiimpact3.com/com.miHoYo.bh3oversea",
            ],
            is_xxxx: "0",
            mtp_switch: "0",
            network_feedback_enable: "0",
            res_use_asset_boundle: "1",
            show_bulletin_button: "0",
            show_bulletin_empty_dialog_bg: "0",
            show_version_text: "0",
            update_streaming_asb: "1",
            use_multy_cdn: "1",
        },
        gameserver: {
            ip: config_1.default.serverHost,
            port: config_1.default.gameServerPort,
        },
        gateway: {
            ip: config_1.default.serverHost,
            port: config_1.default.gameServerPort,
        },
        is_data_ready: true,
        msg: "",
        oaserver_url: `http://${config_1.default.serverHost}/oaserver`,
        region_name: "overseas01",
        retcode: 0,
        server_cur_time: (0, getTs_1.default)(),
        server_cur_timezone: 8,
        server_ext: {
            cdkey_url: "https://sg-public-api.hoyoverse.com/common/",
            mihoyo_sdk_env: "2",
        },
    });
}
exports.default = handler;
