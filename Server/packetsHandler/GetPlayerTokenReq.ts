import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'

export default async (socket: net.Socket, packet: GetPlayerTokenReq) => {
    let reply;
    const user = await prisma?.user.findFirst({
        where: {
            uid: parseInt(packet.account_uid||"0")
        }
    })
    if(!user||packet.account_token!==user.token){
        reply = Packet.getInstance().serialize(CmdId['GetPlayerTokenRsp'], {
            retcode: Retcode['ACCOUNT_VERIFY_ERROR'],
            msg: "Invalid account!"
        } as GetPlayerTokenRsp)
    }
    reply = Packet.getInstance().serialize(CmdId['GetPlayerTokenRsp'], {
        retcode: Retcode['SUCC'],
        uid: user?.uid,
        token: user?.token,
        account_type: AccountType['ACCOUNT_HOYOLAB'],
        account_uid: packet.account_uid,
        is_bind_access: false,
        user_type: 4,
        hoyolab_account_uid: packet.account_uid

    } as GetPlayerTokenRsp)
    socket.write(reply)
    
}

export interface GetPlayerTokenReq {
    account_type: number
    account_uid?: string
    account_token?: string
    account_ext?: string
    token?: string
    version?: string
    device?: string
    tag?: number
    uid?: number
    system_info?: string
    ipv4_str?: string
    ipv6_str?: string
    cps?: string
    device_uuid?: string
    transfer_code?: string
    transfer_pwd?: string
    ip_info_str?: string
    device_type?: DeviceType
    is_allow_device_register?: boolean
    combo_channel_id?: number
    combo_token?: string
    user_ip_str?: string
}

export interface GetPlayerTokenRsp {
    retcode: Retcode
    uid?: number
    token?: string
    account_type?: AccountType
    account_uid?: string
    tag?: number
    transfer_code?: string
    transfer_pwd_expire_time?: number
    is_bind_access?: boolean
    fightserver_ip?: number
    fightserver_port?: number
    msg?: string
    black_list_end_time?: number
    user_type?: number
    limit_level?: number
    security_cmd_buffer?: string
    hoyolab_account_uid?: string
}

export enum DeviceType {
    DEVICE_TYPE_NONE = 0,
    DEVICE_TYPE_ANDROID = 1,
    DEVICE_TYPE_IOS = 2,
    DEVICE_TYPE_PC = 3,
}

export enum Retcode {
    SUCC = 0,
    FAIL = 1,
    REGISTER_CLOSED = 2,
    ACCOUNT_VERIFY_ERROR = 3,
    TOKEN_REPEAT = 4,
    ACCOUNT_TYPE_ERROR = 5,
    SERVER_FULL = 6,
    INVALID_APK = 7,
    TRANSFER_CODE_ERROR = 8,
    IN_BLACK_LIST = 9,
    SERVER_STOP = 10,
    ACCOUNT_LOCKED = 11,
    SERVER_BUSY = 12,
    DEVICE_TYPE_ERROR = 13,
    FORBID_VISITOR = 14,
    FORBID_TAG_SMURF_VISITOR = 15,
    ANTI_ADDICT_LOGIN = 16,
    GAME_NOT_AVAILABLE = 17
}

export enum AccountType {
    ACCOUNT_NONE = 0,
    ACCOUNT_MIHOYO = 1,
    ACCOUNT_BILIBILI = 2,
    ACCOUNT_UC = 3,
    ACCOUNT_360 = 4,
    ACCOUNT_YYB = 5,
    ACCOUNT_XIAOMI = 6,
    ACCOUNT_HUAWEI = 7,
    ACCOUNT_OPPO = 8,
    ACCOUNT_VIVO = 9,
    ACCOUNT_MEIZU = 10,
    ACCOUNT_COOLPAD = 11,
    ACCOUNT_LENOVO = 12,
    ACCOUNT_GIONEE = 13,
    ACCOUNT_BAIDU = 14,
    ACCOUNT_WANDOUJIA = 15,
    ACCOUNT_LESHI = 16,
    ACCOUNT_GOOGLE = 17,
    ACCOUNT_FACEBOOK = 18,
    ACCOUNT_ITUNES_GC = 19,
    ACCOUNT_SIGNIN_APPLE = 20,
    ACCOUNT_WEGAME = 21,
    ACCOUNT_BYTEDANCE = 22,
    ACCOUNT_STEAM = 23,
    ACCOUNT_HOYOLAB = 24
}
