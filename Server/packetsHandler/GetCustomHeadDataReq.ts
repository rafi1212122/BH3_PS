import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetCustomHeadDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetCustomHeadDataRsp'], {
        retcode: Retcode.SUCC,
        is_all: true,
        custom_head_list: []
    } as GetCustomHeadDataRsp)
    socket.write(reply)
}

export interface GetCustomHeadDataReq {}

export interface GetCustomHeadDataRsp {
    retcode: Retcode,
    is_all: boolean,
    custom_head_list: CustomHead[]
}

export interface CustomHead {
    id: number
    end_time: number
}