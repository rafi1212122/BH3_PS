import net from "net"
import { GetScDLCReq, GetScDLCRsp, GetScDLCRsp_CmdId, GetScDLCRsp_Retcode, OpenworldQuestStatus } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetScDLCReq) => {
    Packet.getInstance().serializeAndSend(socket, GetScDLCRsp_CmdId.CMD_ID, {
        retcode: GetScDLCRsp_Retcode.SUCC,
        fever: {
            level: 0,
            feverSlotNum: 3,
            exp: 0,
        },
        dailyQuestData: {
            leftAcceptTimes: 2,
            refreshLeftTimes: 3,
            refreshCostMaterialId: 0,
            refreshCostMaterialNum: 0
        },
        name: "abc"

    } as GetScDLCRsp)
}