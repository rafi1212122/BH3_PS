import net from "net"
import { CmdId } from "../../util/CmdId"
import getTs from "../../util/getTs"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"
import GameServer from "../GameServer"

export default async (socket: net.Socket, packet: GetLoginActivityReq) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['GetLoginActivityRsp'], {
            retcode: Retcode['FAIL'],
        } as GetLoginActivityRsp)
        return socket.write(reply)
    }
    reply = Packet.getInstance().serialize(CmdId['GetLoginActivityRsp'], {
        retcode: Retcode['SUCC'],
        login_list: [
            {
                id: 69,
                login_days: 0,
                accept_time: parseInt(getTs()) - 10000,
                duration_end_time: parseInt(getTs()) + 1000000,
            }
        ]
    } as GetLoginActivityRsp)
    socket.write(reply)
    
}

export interface GetLoginActivityReq {}

export interface GetLoginActivityRsp {
    retcode: Retcode,
    login_list: LoginActivityData[]
}

export interface LoginActivityData {
    id: number
    login_days: number
    has_take_days_reward_list: number[]
    has_take_days_bonus_reward_list: number[]
    accept_time: number
    duration_end_time: number
}