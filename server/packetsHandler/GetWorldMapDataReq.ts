import net from 'net'
import { GetWorldMapDataReq, GetWorldMapDataRsp, GetWorldMapDataRsp_CmdId, GetWorldMapDataRsp_Retcode } from '../../BengHuai'
import Packet from '../Packet'

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
                worldMapId: 3,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 25,
                highLightMaxLevel: 30,
                weight: 0,
                advanceTime: 1300046400,
                id: 3
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
                worldMapId: 5,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 1,
                advanceTime: 1300046400,
                id: 5
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
            },
            {
                worldMapId: 2107,
                beginTime: 1563069600,
                endTime: 2060107199,
                highLightMinLevel: 20,
                highLightMaxLevel: 99,
                weight: 205,
                advanceTime: 1563069600,
                id: 121
            },
            {
                worldMapId: 18,
                beginTime: 1300046400,
                endTime: 2060107199,
                highLightMinLevel: 50,
                highLightMaxLevel: 99,
                weight: 1,
                advanceTime: 1300046400,
                id: 286
            },
            {
                worldMapId: 2221,
                beginTime: 1611712800,
                endTime: 2060107199,
                highLightMinLevel: 15,
                highLightMaxLevel: 88,
                weight: 1,
                advanceTime: 1611712800,
                id: 307
            },
            {
                worldMapId: 2259,
                beginTime: 1680724800,
                endTime: 1684353599,
                highLightMinLevel: 30,
                highLightMaxLevel: 99,
                weight: 1001,
                advanceTime: 1680724800,
                id: 377
            },
            {
                worldMapId: 2264,
                beginTime: 1680724800,
                endTime: 1682654399,
                highLightMinLevel: 0,
                highLightMaxLevel: 0,
                weight: 122,
                advanceTime: 1680724800,
                id: 382
            }
        ]
    } as GetWorldMapDataRsp)
}