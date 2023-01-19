import net from "net"
import { GetCustomHeadDataReq, GetCustomHeadDataRsp, GetCustomHeadDataRsp_CmdId, GetCustomHeadDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCustomHeadDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetCustomHeadDataRsp_CmdId.CMD_ID, {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: [
            {
                "id": 161001
            },
            {
                "id": 161007
            },
            {
                "id": 161009
            },
            {
                "id": 161011
            },
            {
                "id": 161016
            },
            {
                "id": 161017
            },
            {
                "id": 161065
            },
            {
                "id": 162081
            }
        ]
    } as GetCustomHeadDataRsp)
}