import net from "net"
import { GetPhonePendantDataReq, GetPhonePendantDataRsp, GetPhonePendantDataRsp_CmdId, GetPhonePendantDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPhonePendantDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetPhonePendantDataRsp_CmdId.CMD_ID, {
        retcode: GetPhonePendantDataRsp_Retcode.SUCC,
        phonePendantList: [
            {
                id: 350005
            },
            {
                id: 350011
            },
            {
                id: 350012
            },
            {
                id: 350013
            },
            {
                id: 350053
            },
            {
                id: 350305
            }
        ]
    } as GetPhonePendantDataRsp)
}