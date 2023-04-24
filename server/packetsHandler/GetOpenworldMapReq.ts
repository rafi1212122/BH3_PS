import net from "net"
import { GetOpenworldMapReq, GetOpenworldMapRsp, GetOpenworldMapRsp_CmdId, GetOpenworldMapRsp_Retcode, OpenworldQuestStatus } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import { getSpawn } from "../../mongodb/Model/OpenworldSpawn"

export default async (socket: net.Socket, packet: GetOpenworldMapReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    Packet.getInstance().serializeAndSend(socket, GetOpenworldMapRsp_CmdId.CMD_ID, {
        retcode: GetOpenworldMapRsp_Retcode.SUCC,
        mapId: packet.mapId,
        cycle: 1,
        eventRandomSeed: 761201006,
        spawnPoint: user?(await getSpawn(user.uid, packet.mapId))?.point:"",
        overViewList: [
            {
                missionId: 55008,
                progress: 1
            }
        ],
        statList: [
            {
                id: 1,
                maxNum: 0,
                finishNum: 0
            },
            {
                id: 3,
                maxNum: 0,
                finishNum: 0
            },
            {
                id: 4,
                maxNum: 0,
                finishNum: 0
            }
        ],
        status: 1,
        questData: {
            isOpen: false,
            dayOpenTimes: 0,
            refreshLeftTimes: 15,
            nextRefreshCost: 0,
            isCanAbandon: true,
            challengeScore: 0,
            isQuestFinish: false,
            openQuestTime: 0
        },
        techData: {
            mapId: 1,
        }
    } as GetOpenworldMapRsp)
}