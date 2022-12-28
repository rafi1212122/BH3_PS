import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { ClientData, ClientDataType } from "./GetClientDataReq"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: SetClientDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['SetClientDataRsp'], {
        retcode: Retcode.SUCC,
        type: packet.client_data.type,
        id: packet.client_data.id
    } as SetClientDataRsp)
    console.log('CLIENT DATA', packet.client_data.data)
    socket.write(reply)
}

export interface SetClientDataReq {
    client_data: ClientData
}

export interface SetClientDataRsp {
    retcode: Retcode,
    type: ClientDataType,
    id: number
}
