import { GetOpenworldMapReq, GetOpenworldMapRsp, GetOpenworldMapRsp_CmdId, GetOpenworldMapRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { openworldSpawns } = session.player.user
    const data = packet.data as GetOpenworldMapReq

    const rsp = Packet.encode(GetOpenworldMapRsp, {
        retcode: GetOpenworldMapRsp_Retcode.SUCC,
        mapId: data.mapId,
        cycle: data.mapId === 1 ? 1 : 0,
        eventRandomSeed: 425767841,
        spawnPoint: openworldSpawns.find(i => i.mapId === data.mapId)?.spawnPoint || "",
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
        status: data.mapId === 1 ? 1 : 3,
        overViewList: data.mapId === 1 ? [
            {
                missionId: 55008,
                progress: 1
            }
        ] : [],
        questData: {
          refreshLeftTimes: 15,
          isCanAbandon: true
        },
        techData: {
          mapId: data.mapId
        }
    }, GetOpenworldMapRsp_CmdId.CMD_ID)

    session.send(rsp)
}