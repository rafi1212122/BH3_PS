import net from "net"
import { EndlessType, GetEndlessStatusReq, GetEndlessStatusRsp, GetEndlessStatusRsp_CmdId, GetEndlessStatusRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import getTs from '../../util/getTs'

export default (socket: net.Socket, packet: GetEndlessStatusReq) => {
    Packet.getInstance().serializeAndSend(socket, GetEndlessStatusRsp_CmdId.CMD_ID, {
        retcode: GetEndlessStatusRsp_Retcode.SUCC,
        curStatus: {
            endlessType: EndlessType.ENDLESS_TYPE_ULTRA,
            beginTime: 1681110000,
            endTime: parseInt(getTs())*1.2,
            closeTime: parseInt(getTs())*1.25,
            preGeneralActivityId: 40000162
        },
        selectedEndlessType: 5
    } as GetEndlessStatusRsp)
}