"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    return res.json({
        region_list: [
            {
                dispatch_url: "https://overseas01.honkaiimpact3.com/query_gateway",
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
                name: "overseas01",
                retcode: 0,
                title: "",
            },
        ],
        retcode: 0,
    });
}
exports.default = handler;
