import net from "net"
import { SetClientDataReq, SetClientDataRsp, SetClientDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: SetClientDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['SetClientDataRsp'], {
        retcode: SetClientDataRsp_Retcode.SUCC,
        type: packet.clientData?.type,
        id: packet.clientData?.id
    } as SetClientDataRsp)
    console.log('SET CLIENT DATA', packet.clientData?.data)
    socket.write(reply)
}