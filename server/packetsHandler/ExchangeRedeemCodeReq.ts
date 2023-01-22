import net from "net"
import { ExchangeRedeemCodeReq, ExchangeRedeemCodeRsp, ExchangeRedeemCodeRsp_CmdId, ExchangeRedeemCodeRsp_Retcode, GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode } from "../../BengHuai"
import User from "../../mongodb/Model/User"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default async (socket: net.Socket, packet: ExchangeRedeemCodeReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, ExchangeRedeemCodeRsp_CmdId.CMD_ID, {
            retcode: ExchangeRedeemCodeRsp_Retcode.FAIL,
        } as ExchangeRedeemCodeRsp)
    }
    const updateUser = await User.findOneAndUpdate({
            uid: user.uid,
        }, {
            $set: { hcoin: user.hcoin+200 }
    },{ 
        returnDocument: 'after'
    })
    if(!updateUser.value)return Packet.getInstance().serializeAndSend(socket, ExchangeRedeemCodeRsp_CmdId.CMD_ID, {
        retcode: ExchangeRedeemCodeRsp_Retcode.FAIL,
    } as ExchangeRedeemCodeRsp)

    Packet.getInstance().serializeAndSend(socket, ExchangeRedeemCodeRsp_CmdId.CMD_ID, {
        retcode: ExchangeRedeemCodeRsp_Retcode.SUCC,
        redeemCode: packet.redeemCode,
        rewardList: [{
            hcoin: 200
        }]
    } as ExchangeRedeemCodeRsp)
    
    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        hcoin: updateUser.value.hcoin,
        freeHcoin: updateUser.value.hcoin,
        payHcoin: 0
    } as GetMainDataRsp)
}