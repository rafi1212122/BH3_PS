import net from "net"
import { CmdId } from "../../util/CmdId"
import GameServer from "../GameServer"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetMainDataReq) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
            retcode: Retcode['FAIL'],
        } as GetMainDataRsp)
        return socket.write(reply)
    }
    reply = Packet.getInstance().serialize(CmdId['GetMainDataRsp'], {
        retcode: Retcode.SUCC,
        nickname: user.name,
        level: 1,
        exp: 0,
        hcoin: 600,
        scoin: 1000,
        stamina: 200,
        anti_addict: {},
        chatworld_activity_info: {
            is_has_npc_red_envelope: true,
        },
        warship_avatar: {
            warship_first_avatar_id: 711
        },
        warship_theme: {},
        on_medal: {}
    } as GetMainDataRsp)
    socket.write(reply)
}

export interface GetMainDataReq {
    type_list: DataType[]
}

export interface GetMainDataRsp {
    retcode: Retcode
    nickname: string
    level: number
    exp: number
    hcoin: number
    scoin: number
    stamina: number
    stamina_recover_left_time: number
    stamina_recover_config_time: number
    equipment_size_limit: number
    self_desc: string
    pay_hcoin: number
    free_hcoin: number
    assistant_avatar_id: number
    is_allow_cost_senior_equip_on_cur_device: boolean
    birthday: number
    month_recharge_price: number
    wait_del_hcoin: number
    on_medal_id: number
    anti_addict: AntiAddict
    today_recharge_price: number
    use_frame_id: number
    is_all: boolean
    mcoin: number
    open_panel_activity_list: number[]
    video_popup_list: VideoPopupData[]
    on_phone_pendant_id: number
    next_evaluate_time: number
    chatworld_activity_info: ChatworldActivityInfo
    level_lock_id: number
    warship_avatar: WarshipAvatarData
    custom_head_id: number
    total_login_days: number
    register_time: number
    warship_theme: WarshipThemeData
    wait_del_material_list: WaitDelMaterialData[]
    on_medal: Medal

}

export interface AntiAddict {
    child_age: number
    teenage_age: number
    age: number
    max_today_recharge_price: number
    is_max_game_time: boolean
    is_force_kick: boolean
    warning_today_recharge_price: number
    warning_game_time: number
    is_warning_game_time: boolean
    max_game_time: number
    is_force_kick_for_latest_time: boolean
    is_force_kick_for_max_time: boolean
    teenager_login_latest_time: string
    teenager_login_earliest_time: string
    is_lastest_time: boolean
}

export interface VideoPopupData {
    id: number
    begin_time: number
    end_time: number
    middle_image_path: string
    video_icon: string
    video_link: string
    video_link_open_type: number
    max_times: number
}

export interface Medal {
    id: number
    end_time: number
    extra_param: number
}

export interface ChatworldActivityInfo {
    treasure_schedule_id: number
    is_has_npc_red_envelope: boolean
}

export interface WaitDelMaterialData {
    material_id: number
    num: number
}

export interface WarshipThemeData {
    warship_id: number
    component_list: WarshipComponent[]
    bgm_play_mode: number
    is_weather_fixed: boolean
    weather_idx: number
}

export interface WarshipComponent {
    type: number
    component_id: number
}

export interface WarshipAvatarData {
    warship_first_avatar_id: number
    warship_second_avatar_id: number
}

export enum DataType {
    ALL = 0,
    NICKNAME = 2,
    LEVEL = 3,
    EXP = 4,
    HCOIN = 5,
    SCOIN = 6,
    STAMINA = 7,
    STAMINA_RECOVER_LEFT_TIME = 8,
    STAMINA_RECOVER_CONFIG_TIME = 9,
    EQUIPMENT_SIZE_LIMIT = 14,
    SELF_DESC = 16,
    PAY_HCOIN = 17,
    FREE_HCOIN = 18,
    ASSISTANT_AVATAR_ID = 19,
    IS_ALLOW_COST_SENIOR_EQUIP_ON_CUR_DEVICE = 20,
    BIRTHDAY = 21,
    RECHARGE_PRICE = 22,
    WAIT_DEL_HCOIN = 23,
    ON_MEDAL_ID = 24,
    ANTI_ADDICT = 25,
    USE_FRAME_ID = 26,
    MCOIN = 27,
    PANEL_ACTIVITY = 28,
    VIDEO_POPUP = 29,
    ON_PHONE_PENDANT_ID = 30,
    STORE_EVALUATE = 31,
    CHATWORLD_ACTIVITY = 32,
    LEVEL_LOCK = 33,
    WARSHIP_AVATAR = 35,
    USE_CUSTOM_HEAD = 36,
    TOTAL_LOGIN_DAYS = 37,
    WARSHIP_THEME = 38,
    WAIT_DEL_MATERIAL = 39
}

interface Bulletin {
    id?: number,
    type?: number,
    weight?: number,
    title_button?: string,
    title?: string,
    banner_path?: string,
    event_date_str?: string,
    content?: string,
    mark?: number,
    begin_time?: number,
    end_time?: number,
    update_time?: number,
    show_config_id?: number
}