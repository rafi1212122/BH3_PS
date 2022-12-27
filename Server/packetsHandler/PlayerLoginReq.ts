import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import { DeviceType, Retcode } from "./GetPlayerTokenReq"

export default async (socket: net.Socket, packet: PlayerLoginReq) => {
    let reply;
    const user = await prisma?.user.findFirst({
        where: {
            uid: parseInt(packet.account_uid||"0")
        }
    })
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
            retcode: Retcode['SUCC'],
            region_name: "ps01",
            region_id: 420,
            cg_type: CGType.CG_SEVEN_CHAPTER,
            login_session_token: 69
        } as PlayerLoginRsp)
    }
    reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
        retcode: Retcode['SUCC'],
        region_name: "ps01",
        region_id: 420,
        cg_type: CGType.CG_SEVEN_CHAPTER,
        login_session_token: 69
    } as PlayerLoginRsp)
    socket.write(reply)
    
}

export interface PlayerLoginReq {
    last_server_packet_id: number
    cps: string
    check_sum: string
    device_uuid: string
    android_signatures: string
    language: string
    advertiser_id: string
    security_cmd_reply: string
    last_login_version: number
    account_type: number
    account_uid: string
    device_type: DeviceType
    user_type: number
    user_ip: string
    tag: number
    client_version: string
    client_device: string
    system_info: string
    android_sign: string
    limit_level: number
    black_list_end_time: number
    is_bind_access: boolean
    login_session_token: number
    hoyolab_account_uid: string
    user_port: number
}

export interface PlayerLoginRsp {
    retcode: Retcode
    msg: string
    is_first_login: boolean
    last_client_packet_id: number
    region_name: string
    cg_type: CGType
    last_logout_time: number
    region_id: number
    is_valid_reconnect: boolean
    account_type: number
    account_uid: string
    login_session_token: number
}

export enum CGType {
    CG_NONE = 0,
    CG_START = 1,
    CG_SEVEN_CHAPTER = 2
}