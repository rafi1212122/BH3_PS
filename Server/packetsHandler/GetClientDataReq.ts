import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetClientDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetClientDataRsp'], {
        retcode: 2,
        id: packet.id,
        type: packet.type
    } as GetClientDataRsp)
    socket.write(reply)
}

export interface GetClientDataReq {
    type?: ClientDataType,
    id?: number
}

export interface GetClientDataRsp {
    retcode: Retcode,
    client_data_list: [],
    id?: number
    type?: ClientDataType,
}

export interface ClientData {
    type?: ClientDataType,
    id?: number,
    data?: Buffer
}

export enum ClientDataType {
    CLIENT_DATA_NONE = 0,
    CLIENT_DATA_ALL = 1,
    CLIENT_DATA_RPG_TALE = 2,
    CLIENT_DATA_WORLDMAP = 3,
    CLIENT_DATA_KINGDOM_WAR = 4,
    CLIENT_DATA_AUGMENT_PERFORMANCE = 5,
    CLIENT_DATA_AVATAR = 6,
    CLIENT_DATA_OPENWORLD_CHAPTER = 7,
    CLIENT_DATA_OPENWORLD = 8,
    CLIENT_DATA_NINJA = 9,
    CLIENT_DATA_AVATAR_TUTORIAL = 10,
    CLIENT_DATA_PHONE_NOTICE = 11,
    CLIENT_DATA_NEWBIE_ACTIVITY = 12
}