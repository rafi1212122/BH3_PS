import net from "net"
import { TvtCardGetDataReq, TvtCardGetDataRsp, TvtCardGetDataRsp_CmdId, TvtCardGetDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: TvtCardGetDataReq) => {
    Packet.getInstance().serializeAndSend(socket, TvtCardGetDataRsp_CmdId.CMD_ID, {
        retcode: TvtCardGetDataRsp_Retcode.SUCC,
        selectedSuiteIdx: 0,
        isTakeSeasonReturn: true
    } as TvtCardGetDataRsp)
}