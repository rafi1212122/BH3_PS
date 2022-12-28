import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetBulletinReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetBulletinRsp'], {
        retcode: Retcode.SUCC,
        bulletin_list: [],
        is_all: false
    } as GetBulletinRsp)
    socket.write(reply)
}

export interface GetBulletinReq {
    type: ReqBulletinType,
    bulletin_id_list: number
}

export interface GetBulletinRsp {
    retcode: Retcode,
    bulletin_list: Bulletin[],
    is_all: boolean
}

export enum ReqBulletinType {
    BULLETIN_ALL = 0,
    BULLETIN_UPDATE_TIME = 1,
    BULLETIN_TITLE = 2,
    BULLETIN_CONTENT = 3,
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