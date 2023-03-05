import net from "net"
import { GetCardProductInfoReq, GetCardProductInfoRsp, GetCardProductInfoRsp_CmdId, GetCardProductInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCardProductInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetCardProductInfoRsp_CmdId.CMD_ID, {
        retcode: GetCardProductInfoRsp_Retcode.SUCC,
        cardProductInfoList: [
            {
                productName: "asiagifthardcointier5",
                expireTime: 1648943096,
                rewardNum: 0,
                hcoin: 0,
                takeRewardDays: 7,
                lastDailyRewardTime: 1648798510,
                bonusNeedDays: 15,
                bonusHcoin: 500,
                bonusMaxSaveDays: 60,
                cardLeftDays: 0
            }
        ]
    } as GetCardProductInfoRsp)
}