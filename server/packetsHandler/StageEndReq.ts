import net from "net"
import { GetMainDataRsp, GetMainDataRsp_CmdId, GetMainDataRsp_Retcode, PlayerLevelUpNotify, PlayerLevelUpNotify_CmdId, StageEndReq, StageEndRsp, StageEndRsp_CmdId, StageEndRsp_Retcode, StageEndStatus } from "../../BengHuai"
import User from "../../mongodb/Model/User"
import GameServer from "../GameServer"
import Packet from "../Packet"
import ChapterGroupGetDataReq from "./ChapterGroupGetDataReq"
import GetConfigReq from "./GetConfigReq"

export default async (socket: net.Socket, packet: StageEndReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, StageEndRsp_CmdId.CMD_ID, {
            retcode: StageEndRsp_Retcode.FAIL,
        } as StageEndRsp)
    }
    const updateUser = await User.findOneAndUpdate({
        uid: user.uid,
    }, {
        $inc: { scoin: 750, exp: 7, level: 1, stamina: -6 }
    }, {
        returnDocument: 'after'
    })
    if(!updateUser.value)return Packet.getInstance().serializeAndSend(socket, StageEndRsp_CmdId.CMD_ID, {
        retcode: StageEndRsp_Retcode.FAIL,
    } as StageEndRsp)
    session.user = updateUser.value

    Packet.getInstance().serializeAndSend(socket, StageEndRsp_CmdId.CMD_ID, {
        retcode: StageEndRsp_Retcode.SUCC,
        stageId: 10101,
        playerExpReward: 30,
        avatarExpReward: 0,
        scoinReward: 750,
        expConvertScoin: 0,
        buffReward: {
            avatarExpReward: 0
        },
        endStatus: StageEndStatus.STAGE_WIN
    } as StageEndRsp)

    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        stamina: session.user.stamina,
    } as GetMainDataRsp)

    GetConfigReq(socket, {})
    ChapterGroupGetDataReq(socket, {})

    Packet.getInstance().serializeAndSend(socket, GetMainDataRsp_CmdId.CMD_ID, {
        retcode: GetMainDataRsp_Retcode.SUCC,
        openPanelActivityList: [ 2, 6 ],
        level: session.user.level
    } as GetMainDataRsp)

    Packet.getInstance().serializeAndSend(socket, PlayerLevelUpNotify_CmdId.CMD_ID, {
        newLevel: session.user.level,
        oldLevel: session.user.level-1,
        rewardData: {
            exp: 0
        }
    } as PlayerLevelUpNotify)
}