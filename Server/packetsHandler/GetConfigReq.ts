import net from "net"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetConfigReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetConfigRsp'], {
        retcode: Retcode.SUCC,
        stamina_recover_config_time: 60,
        avatar_revive_hcoin_cost: 1,
        same_type_power_up_rate: 2,
        day_time_offset: 0,
        server_cur_time: parseInt(getTs()),
        power_up_scoin_cost_rate: 1,
        max_friend_num: 10,
        anti_cheat_stage_check_config: {
            check_stage_id_list: [] as number[],
            check_stage_type_list: [] as number[]
        }
    } as GetConfigRsp)
    socket.write(reply)
}

export interface GetConfigReq {}

export interface GetConfigRsp {
    retcode: Retcode
    stamina_recover_config_time: number
    avatar_revive_hcoin_cost: number
    same_type_power_up_rate: number
    day_time_offset: number
    server_cur_time: number
    power_up_scoin_cost_rate: number
    max_friend_num: number
    endless_min_player_level: number
    avatar_max_add_goodfeel?: number
    avatar_cost_plus_config_list?: AvatarCostPlusConfig[]
    endless_use_item_cd_time?: number
    disjoin_equipment_back_exp_percent?: number
    gacha_ticket_list?: GachaTicket[]
    region_name?: string
    min_invite_level?: number
    discount_schedule_config_list?: DiscountScheduleConfig[]
    island_event_refresh_interval?: number
    spaceship_begin_time?: number
    spaceship_end_time?: number
    spaceship_id?: number
    is_random_box_product_open?: boolean
    scoin_limit?: number
    friends_point_limit?: number
    product_random_box_begin_time?: number
    product_random_box_end_time?: number
    week_day_activity_coin_item_id?: number
    island_visit_max_help_num?: number
    cost_senior_equip_after_cancel_protect_min_time_diff?: number
    rogue_stage_cost_item_id?: number
    rogue_stage_max_progress?: number
    bulletin_activity_list?: BulletinActivityConfig[]
    armada_discovery_reward_list?: ArmadaDiscoveryRewardConfig[]
    rogue_stage_open_level?: number
    armada_begin_time?: number
    armada_end_time?: number
    armada_custom_content?: string
    stigmata_rune_open_level?: number
    stigmata_title_open_level?: number
    stigmata_disjoin_title_back_exp_percent?: number
    stigmata_promote_max_times?: number
    stigmata_rune_combat_ratio?: number
    stigmata_disjoin_back_exp_percent?: number
    stigmata_refine_value_back_percent?: number
    stigmata_title_exp_material_list?: number[]
    scoin_convert_per_exp?: number
    mp_reset_skill_hcoin_cost?: number
    mp_member_max_times_for_all_act?: number
    mp_member_exhausted_drop_ratio?: number
    friend_bond_level_config_list?: FriendBondLevelConfig[]
    mp_punish_mp_exp_reduce_rate?: number
    friend_assistant_add_bond?: number
    armada_manage_mail_length?: number
    armada_contact_length?: number
    armada_manage_mail_cd?: number
    armada_bulletin_length?: number
    openworld_judge_para_type1?: number
    openworld_judge_para_type2?: number
    openworld_judge_para_type3?: number
    openworld_judge_para_type4?: number
    trial_avatar_player_min_level?: number
    disjoin_equipment_max_batch_num?: number
    equip_disjoint_unlock_level?: number
    stage_type_limit_avatar_fight_in_venture_list?: number[]
    armada_boss_stage_open_level?: number
    anti_cheat_stage_check_config: AntiCheatStageCheckConfig
    is_can_gal_touch?: boolean
    is_resistance_open?: boolean
    next_day_begin_time?: number
}

export interface GachaTicket {
    material_id: number,
    hcoin_cost: number
}

export interface DiscountScheduleConfig {
    type: number,
    discount: number,
    begin_time: number,
    end_time: number,
    para_int_list: number[],
}

export interface FriendBondLevelConfig {
    level?: number,
    min_bond?: number,
    assist_cd_reduce_rate?: number,
    invite_add_friends_point?: number,
    extra_add_mp_exp_rate?: number,
    extra_mp_add_friends_point?: number
}

export interface AntiCheatStageCheckConfig {
    check_stage_id_list: number[],
    check_stage_type_list: number[]
}

export interface AvatarCostPlusConfig {
    star: number,
    cost_plus: number
}

export interface BulletinActivityConfig {
    activity_id: number
    activity_type: number
    begin_time: number
    end_time: number
    bulletin_id: number
    mission_ids: number[]
    type_param_list: number[]
    type_param_str: string
    min_player_level: number
    max_player_level: number
    item_list: number[]
    title_name: string
    title_image: string
    image_path: string
    link_button: string
    description: string
    weight: number
    background_path: string
    text_image_path: string
    currency_list: number[]
    unlock_param_str: string
}

interface ArmadaDiscoveryRewardConfig {
    discovery: string
    reward_id: string
}