import net from "net"
import { GetDropLimitActivityReq, GetDropLimitActivityRsp, GetDropLimitActivityRsp_CmdId, GetDropLimitActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetDropLimitActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetDropLimitActivityRsp_CmdId.CMD_ID, {
        retcode: GetDropLimitActivityRsp_Retcode.SUCC,
        dropLimitActivityList: [
            {
                activityId: 1,
                beginTime: 1576029600,
                endTime: 1891735200,
                dropLimitGotNumList: [
                    {
                        limitId: 101,
                        gotNum: 0
                    },
                    {
                        limitId: 201,
                        gotNum: 0
                    },
                    {
                        limitId: 301,
                        gotNum: 0
                    },
                    {
                        limitId: 401,
                        gotNum: 0
                    }
                ]
            },
        ]
    } as GetDropLimitActivityRsp)
}