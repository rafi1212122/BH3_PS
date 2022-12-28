import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetEquipmentDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetEquipmentDataRsp'], {
        retcode: Retcode.SUCC,
        is_all: true,
        vitality_value: 0,
        weapon_list: [
            {
                unique_id: 101,
                id: 20001,
                level: 1,
                exp: 0,
                is_protected: true,
                is_extracted: false
            }
        ],
        mecha_list: [] as Mecha[],
        stigmata_list: [] as Stigmata[],
        material_list: [] as Material[],
    } as GetEquipmentDataRsp)
    socket.write(reply)
}

export interface GetEquipmentDataReq {
    weapon_unique_id_list: number[]
    stigmata_unique_id_list: number[]
    material_id_list: number[]
    mecha_unique_id_list: number[]
}

export interface GetEquipmentDataRsp {
    retcode: Retcode
    weapon_list: Weapon[]
    stigmata_list: Stigmata[]
    material_list: Material[]
    is_all: boolean
    mecha_list: Mecha[]
    vitality_value: number
}

export interface Material {
    id: number
    num: number
}

export interface Mecha {
    unique_id: number
    id: number
}

export interface Weapon {
    unique_id: number
    id: number
    level: number
    exp: number
    is_protected: boolean
    cancel_protect_time: number
    is_extracted: boolean
    sub_weapon_id: number
    quantum_branch_list: number[]
}

export interface Stigmata {
    unique_id: number
    id: number
    level: number
    exp: number
    is_protected: boolean
    is_affix_identify: boolean
    cancel_protect_time: number
    slot_num: number
    rune_list: StigmataRune[]
    wait_select_rune_list: StigmataRune[]
    refine_value: number
    promote_times: number
    title_level: number
    title_exp: number
    title_id: number
    wait_select_rune_group_list: StigmataRuneGroup[]
}

export interface StigmataRune {
    rune_id: number
    strength_percent: number
}


export interface StigmataRuneGroup {
    unique_id: number
    rune_list: StigmataRune[]
}
