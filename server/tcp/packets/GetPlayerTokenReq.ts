import User from "../../../model/User"
import { GetPlayerTokenRsp, GetPlayerTokenRsp_CmdId, GetPlayerTokenRsp_Retcode, GetPlayerTokenReq } from "../../../resources/proto/BengHuai"
import Packet from "../Packet"
import Session from "../Session"

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as GetPlayerTokenReq

    if(!data.accountToken) return
    const user = await User.fromToken(data.accountToken)
    
    let rsp: Packet
    
    if(!user || user.uid !== parseInt(data.accountUid||"0")) {
        session.c.debug("I'm Sussy!")
        rsp = Packet.encode(GetPlayerTokenRsp, {
            retcode: GetPlayerTokenRsp_Retcode.ACCOUNT_VERIFY_ERROR,
            msg: "Sussy login!"
        }, GetPlayerTokenRsp_CmdId.CMD_ID)
    }else {
        rsp = Packet.encode(GetPlayerTokenRsp, {
            retcode: GetPlayerTokenRsp_Retcode.SUCC,
            uid: user.uid,
            token: user.token,
            accountType: data.accountType,
            accountUid: data.accountUid,
            fightserverIp: 186782306,
            fightserverPort: 2096693423,
            userType: 4,
            hoyolabAccountUid: data.accountUid
        }, GetPlayerTokenRsp_CmdId.CMD_ID)

        try {
            session.player = await User.playerFromUID(user.uid)
        } catch (error) {
            rsp = Packet.encode(GetPlayerTokenRsp, {
                retcode: GetPlayerTokenRsp_Retcode.FAIL,
                msg: "Server Error!"
            }, GetPlayerTokenRsp_CmdId.CMD_ID)
        }
    }

    session.send(rsp)
}