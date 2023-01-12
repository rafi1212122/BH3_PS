import net from "net"
import logger from "../../util/logger"
import { StageEndReq, StageEndRsp, StageEndRsp_CmdId, StageEndRsp_Retcode, StageEndStatus } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: StageEndReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, StageEndRsp_CmdId.CMD_ID, {
        retcode: StageEndRsp_Retcode.SUCC,
        stageId: 10101,
        playerExpReward: 10000,
        avatarExpReward: 25,
        scoinReward: 750,
        expConvertScoin: 324,
        buffReward: {
            avatarExpReward: 0
        },
        endStatus: StageEndStatus.STAGE_WIN
    } as StageEndRsp)
}