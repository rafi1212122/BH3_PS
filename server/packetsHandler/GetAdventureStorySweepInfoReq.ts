import net from "net"
import { GetAdventureStorySweepInfoReq, GetAdventureStorySweepInfoRsp, GetAdventureStorySweepInfoRsp_CmdId, GetAdventureStorySweepInfoRsp_Retcode, MinuteStage_StageState } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAdventureStorySweepInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAdventureStorySweepInfoRsp_CmdId.CMD_ID, {
        retcode: GetAdventureStorySweepInfoRsp_Retcode.SUCC,
        usedStamina: 0
    } as GetAdventureStorySweepInfoRsp)
}