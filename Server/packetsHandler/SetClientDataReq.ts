import net from "net"
import logger from "../../util/logger"
import { SetClientDataReq, SetClientDataRsp, SetClientDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: SetClientDataReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['SetClientDataRsp'], {
        retcode: SetClientDataRsp_Retcode.SUCC,
        type: packet.clientData?.type,
        id: packet.clientData?.id
    } as SetClientDataRsp)
    console.log('SET CLIENT DATA', packet.clientData?.data)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}