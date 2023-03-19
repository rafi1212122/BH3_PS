import net from "net"
import { MirageGetActivityReq, MirageGetActivityRsp, MirageGetActivityRsp_CmdId, MirageGetActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: MirageGetActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, MirageGetActivityRsp_CmdId.CMD_ID, {
        retcode: MirageGetActivityRsp_Retcode.SUCC,
        activity: {
            scheduleId: 1,
            dailyCurrencyDropNum: 0,
            talentList: [
                {
                    talentId: 1,
                    level: 1
                },
                {
                    talentId: 2,
                    level: 1
                },
                {
                    talentId: 3,
                    level: 1
                },
                {
                    talentId: 4,
                    level: 1
                }
            ]
        }
    } as MirageGetActivityRsp)
}