import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Material, StigmataRune } from "./GetEquipmentDataReq"
import { Medal } from "./GetMainDataReq"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetPlayerCardReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetPlayerCardRsp'], {
        retcode: Retcode.SUCC,
        type: PlayerCardType.CARD_ALL,
        avatar_id_list: [] as number[],
        msg_config: 0,
        msg_data: {
            msg_list: [] as PlayerCardMsg[],
        },
        last_read_msg_index: 0,
        mp_like_num: 300,
        island_like_num: 1000,
        elf_id_list: [] as number[],
        campaign_like_num: 10000,
        medal_id_list: [] as number[],
        medal_list: [] as Medal[]
    } as GetPlayerCardRsp)
    socket.write(reply)
}

export interface GetPlayerCardReq {
    type?: PlayerCardType
}

export interface GetPlayerCardRsp {
    retcode: Retcode
    type: PlayerCardType
    avatar_id_list: number[]
    medal_id_list: number[]
    msg_config: number
    msg_data: PlayerCardMsgData
    last_read_msg_index: number
    mp_like_num: number
    island_like_num: number
    elf_id_list: number[]
    campaign_like_num: number
    medal_list: Medal[]
}

export enum PlayerCardType {
    CARD_ALL = 0,
    CARD_AVATAR = 1,
    CARD_MEDAL = 2,
    CARD_MESSAGE = 3,
    CARD_MSG_CONFIG = 4,
    CARD_ELF = 5
}

export interface PlayerCardMsgData {
    msg_index?: number
    msg_config?: number
    msg_list: PlayerCardMsg[]
}

export interface PlayerCardMsg {
    index?: number
    msg: ChatMsg
}

export interface ChatMsg {
    uid: number
    nickname: string
    time: number
    msg: string
    avatar_id: number
    dress_id: number
    content: ChatMsgContent
    channel: MsgChannel
    frame_id: number
    is_sensitive: boolean
    is_goback: boolean
    channel_id: number
    custom_head_id: number
    master_pupil_tag: MasterPupilType
    system_msg: SystemChatMsg
    target_uid: number
    season_id: number
    season_group_id: number
    season_level: number
    mode: number
    mode_para: number
    is_armada_leader: boolean
    is_team_leader: boolean
    check_result: ChatMsgSensitiveCheckResult
    is_lobby_invite: boolean
}

export interface SystemChatMsg {
    type: SystemChatMsgType
    item_id: number
    item_level: number
    item_num: number
    gacha_type: GachaType
}

export enum GachaType {
    GACHA_HCOIN = 2,
    GACHA_SPECIAL_HCOIN = 3,
    GACHA_ACTIVITY_1 = 4,
    GACHA_CUSTOM_AVATAR = 5,
    GACHA_ACTIVITY_2 = 6,
    GACHA_CUSTOM_EQUIP = 7,
    GACHA_BOX_1 = 8,
    GACHA_UNIQUE = 9,
    GACHA_EQUIP_HCOIN = 10,
    GACHA_PRAY = 11,
    GACHA_SPECIAL_2 = 12,
    GACHA_CONTROLLABLE_BOX = 14,
    GACHA_ACTIVITY_3 = 15,
    GACHA_BOX_2 = 16,
    GACHA_BOX_3 = 17,
    GACHA_OPTIONAL_AVATAR = 18,
    GACHA_OPTIONAL_EQUIP = 19,
    GACHA_ADVENTURE = 20,
    GACHA_BOX_4 = 21,
    GACHA_BOX_5 = 22,
    GACHA_ADVENTURE_EQUIP = 23,
    GACHA_BOX_6 = 24,
    GACHA_SP_EQUIP = 25,
    GACHA_ELF_1 = 26,
    GACHA_ACTIVITY_4 = 27,
    GACHA_ACTIVITY_5 = 28,
    GACHA_ACTIVITY_6 = 29,
    GACHA_SPECIAL_3 = 30,
    GACHA_ADVENTURE_NEWBIE_1 = 31,
    GACHA_ADVENTURE_NEWBIE_2 = 32,
    GACHA_SPECIAL_NEWBIE_1 = 33,
    GACHA_SPECIAL_NEWBIE_2 = 34,
    GACHA_BOX_7 = 35,
    GACHA_SPECIAL_NEWBIE_3 = 36,
    GACHA_SPECIAL_NEWBIE_4 = 37,
    GACHA_CUSTOM_AVATAR_GOBACK = 38,
    GACHA_EQUIP_GOBACK = 39,
    GACHA_SPECIAL_NEWBIE_5 = 40,
    GACHA_SPECIAL_NEWBIE_6 = 41,
    GACHA_SPECIAL_NEWBIE_7 = 42,
    GACHA_SPECIAL_NEWBIE_8 = 43,
    GACHA_TYPE_ERROR = 100
}

export enum SystemChatMsgType {
    CHAT_MSG_NONE = 0,
    CHAT_MSG_GACHA = 1,
    CHAT_MSG_LOBBY = 2,
    CHAT_MSG_FORGE = 3,
    CHAT_MSG_SCRATCH = 4
}

export interface ChatMsgSensitiveCheckResult {
    shield_type?: number
    number_check?: number
    rewrite_text?: string
}

export enum MasterPupilType {
    MASTER_PUPIL_NONE_TYPE = 0,
    MASTER_PUPIL_MASTER_TYPE = 1,
    MASTER_PUPIL_PUPIL_TYPE = 2,
    MASTER_PUPIL_NEITHER_ALL = 4
}

export interface ChatMsgContent {
    items: ChatMsgItem[]
}

export interface ChatMsgItem {
    type?: ChatMsgType
    msg_str?: string
    weapon: ChatMsgWeapon
    stigmata: ChatMsgStigmata
    avatar: ChatMsgAvatar
    lobby: ChatMsgLobby
    internal: ChatMsgInternal
    send_red_envelope: ChatSendRedEnvelope
    take_red_envelope: ChatTakeRedEnvelope
    emoji_id?: number
    elf: ChatMsgElf
    red_envelope_take_over: ChatRedEnvelopeTakeOver
    chatworld_beast: ChatMsgWorldBeast
}

export interface ChatTakeRedEnvelope {
    sender_uid: number
    sender_nickname: string
    item_id: number
    take_scoin: number
    drop_item_list: DropItem[]
    msg: string
    take_material: Material
}

export interface DropItem {
    item_id?: number
    level?: number
    num?: number
    rarity?: number
    is_baodi?: boolean
    is_rare_drop?: boolean
    gift_item_id?: number
    gift_level?: number
    gift_num?: number
    is_treasure?: boolean
    is_equip_drop?: boolean
    is_stage_clear_drop?: boolean
    is_avatar_drop?: boolean
    is_theme_wanted_double_drop?: boolean
}

interface ChatMsgWorldBeast {
    chatworld_id: number
    scene_id: number
    beast_unique_id_u64: number
    stage_id: number
}

export interface ChatRedEnvelopeTakeOver {
    sender_uid: number
    sender_nickname: string
    item_id: number
    msg: string
    red_envelope_id: number
}

export interface ChatMsgInternal {
    key_value_list: ChatMsgKeyValue[]
}

export interface ChatSendRedEnvelope {
    item_id: number
    msg: string
    red_envelope_id: number
}

export interface ChatMsgKeyValue {
    key: string
    value: string
}

export interface ChatMsgLobby {
    msg?: string
    level?: number
}

export enum ChatMsgType {
    STR_MSG = 1,
    WEAPON_MSG = 2,
    STIGMATA_MSG = 3,
    AVATAR_MSG = 4,
    LOBBY_MSG = 5,
    INTERNAL_MSG = 6,
    SEND_RED_ENVELOPE_MSG = 7,
    TAKE_RED_ENVELOPE_MSG = 8,
    EMOJI = 9,
    ELF_MSG = 10,
    RED_ENVELOPE_TAKE_OVER_MSG = 11,
    CHATWORLD_BEAST_MSG = 12
}

export interface ChatMsgAvatar {
    id: number
    avatar: AvatarDetailData
}

export interface AvatarDetailData {
    avatar_id: number
    avatar_star: number
    avatar_level: number
    weapon: WeaponDetailData
    stigmata_1: StigmataDetailData
    stigmata_2: StigmataDetailData
    stigmata_3: StigmataDetailData
    skill_list: AvatarSkillDetailData[]
    dress_id: number
    avatar_combat: number
    avatar_artifact: AvatarArtifactDetail
    avatar_sub_star: number
}

export interface AvatarSkillDetailData {
    skill_id: number
    sub_skill_list: AvatarSubSkillDetailData[]
}

export interface AvatarSubSkillDetailData {
    sub_skill_id: number
    level: number
    is_mask?: boolean
}

export interface AvatarArtifactDetail {
    artifact_id: number
    artifact_level: number
    is_artifact_switch_on: boolean
}

export interface ChatMsgStigmata {
    unique_id: number
    stigmata: StigmataDetailData
}

interface StigmataDetailData {
    id: number
    level: number
    rune_list: StigmataRune[]
    title_level: number
    title_exp: number
    title_id: number
    unique_id: number
}

export interface ChatMsgWeapon {
    unique_id: number
    weapon: WeaponDetailData
}

export interface WeaponDetailData {
    id: number
    level: number
    unique_id: number
    sub_weapon_id: number
}

export enum MsgChannel {
    DEFAULT = 0,
    WORLD = 1,
    FRIEND = 2,
    ARMADA = 3,
    PLAYER_CARD = 4,
    LOBBY = 5,
    MASTER_PUPIL = 6,
    COMMON_CHATWORLD = 7,
    GROUP = 8,
    TEAM = 9,
    CAMPAIGN = 10,
    ROOM = 11,
    WORLD_ACTIVITY = 12,
    PRIVATE = 13,
    BATTLE = 14
}

export interface ChatMsgElf {
    id: number
    elf: ElfDetailData
}

export interface ElfDetailData {
    elf_id: number
    level: number
    star: number
    equip_talent_list: ElfTalentDetailData[]
    skill_list: ElfSkillDetailData[]
}

export interface ElfTalentDetailData {
    elf_talent_id: number
    talent_level: number
}

export interface ElfSkillDetailData {
    elf_skill_id: number
    skill_level: number
}