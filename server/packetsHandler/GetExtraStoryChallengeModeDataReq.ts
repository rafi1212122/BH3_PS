import net from "net"
import { GetExtraStoryChallengeModeDataReq, GetExtraStoryChallengeModeDataRsp, GetExtraStoryChallengeModeDataRsp_CmdId, GetExtraStoryChallengeModeDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetExtraStoryChallengeModeDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetExtraStoryChallengeModeDataRsp_CmdId.CMD_ID, {
        retcode: GetExtraStoryChallengeModeDataRsp_Retcode.SUCC,
        chooseDifficulty: 0,
        isCanReset: true,
        chapterId: packet.chapterId
    } as GetExtraStoryChallengeModeDataRsp)
}