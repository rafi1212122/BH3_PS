import net from "net"
import { GetTowerRaidActivityReq, GetTowerRaidActivityRsp, GetTowerRaidActivityRsp_CmdId, GetTowerRaidActivityRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetTowerRaidActivityReq) => {
    Packet.getInstance().serializeAndSend(socket, GetTowerRaidActivityRsp_CmdId.CMD_ID, {
        retcode: GetTowerRaidActivityRsp_Retcode.NOT_OPEN,
    } as GetTowerRaidActivityRsp)
}