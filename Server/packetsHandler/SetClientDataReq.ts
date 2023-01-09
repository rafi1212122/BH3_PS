import net from "net"
import logger from "../../util/logger"
import { SetClientDataReq, SetClientDataRsp, SetClientDataRsp_CmdId, SetClientDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: SetClientDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, SetClientDataRsp_CmdId.CMD_ID, {
        retcode: SetClientDataRsp_Retcode.SUCC,
        type: packet.clientData?.type,
        id: packet.clientData?.id
    } as SetClientDataRsp)
    console.log('SET CLIENT DATA', packet.clientData?.data)
}