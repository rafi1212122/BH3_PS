import net from "net"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetWebActivityInfoReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetWebActivityInfoRsp'], {
        retcode: Retcode.SUCC,
        web_activity_list: []
    } as GetWebActivityInfoRsp)
    socket.write(reply)
}

export interface GetWebActivityInfoReq {}

export interface GetWebActivityInfoRsp {
    retcode: Retcode,
    web_activity_list: WebActivity[]
}

export interface WebActivity {
    activity_id: number,
    show_type: number
}