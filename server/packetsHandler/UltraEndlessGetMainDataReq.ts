import net from "net"
import { UltraEndlessGetMainDataReq, UltraEndlessGetMainDataRsp, UltraEndlessGetMainDataRsp_CmdId, UltraEndlessGetMainDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: UltraEndlessGetMainDataReq) => {
    Packet.getInstance().serializeAndSend(socket, UltraEndlessGetMainDataRsp_CmdId.CMD_ID, {
        retcode: UltraEndlessGetMainDataRsp_Retcode.NOT_OPEN,
    } as UltraEndlessGetMainDataRsp)
}