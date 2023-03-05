import net from "net"
import { LoginWishGetMainDataReq, LoginWishGetMainDataRsp, LoginWishGetMainDataRsp_CmdId, LoginWishGetMainDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: LoginWishGetMainDataReq) => {
    Packet.getInstance().serializeAndSend(socket, LoginWishGetMainDataRsp_CmdId.CMD_ID, {
        retcode: LoginWishGetMainDataRsp_Retcode.SUCC,
        activityList: [
            {
                activityId: 15,
                showBeginTime: 1677722400,
                showEndTime: 1680724800,
                beginTime: 1677722400,
                endTime: 1680724800,
                loginDays: 2,
                hasTakeRewardSpecialDayList: [
                    1
                ]
            }
        ]
    } as LoginWishGetMainDataRsp)
}