import net from "net"
import { GetBattlePassReq, GetBattlePassRsp, GetBattlePassRsp_CmdId, GetBattlePassRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: Partial<GetBattlePassReq>) => {
    Packet.getInstance().serializeAndSend(socket, GetBattlePassRsp_CmdId.CMD_ID, {
        retcode: GetBattlePassRsp_Retcode.NOT_OPEN,
    } as GetBattlePassRsp)
}