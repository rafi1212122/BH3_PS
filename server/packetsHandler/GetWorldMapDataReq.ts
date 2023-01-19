import net from "net"
import { GetWorldMapDataReq, GetWorldMapDataRsp, GetWorldMapDataRsp_CmdId, GetWorldMapDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetWorldMapDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetWorldMapDataRsp_CmdId.CMD_ID, {
        retcode: GetWorldMapDataRsp_Retcode.SUCC,
        worldMapList: [
            {
                worldMapId: 1,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 0,
                advanceTime: 1300046400,
                id: 1
            },
            {
                worldMapId: 2,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 0,
                advanceTime: 1300046400,
                id: 2
            },
            {
                worldMapId: 4,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 4
            },
            {
                worldMapId: 6,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 15,
                highLightMaxLevel: 88,
                weight: 1,
                advanceTime: 1300046400,
                id: 6
            },
            {
                worldMapId: 7,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 30,
                highLightMaxLevel: 40,
                weight: 1,
                advanceTime: 1300046400,
                id: 7
            },
            {
                worldMapId: 8,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 8
            },
            {
                worldMapId: 9,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 9
            },
            {
                worldMapId: 10,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 10
            },
            {
                worldMapId: 11,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 11
            },
            {
                worldMapId: 12,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 49
            }
        ]
    } as GetWorldMapDataRsp)
}