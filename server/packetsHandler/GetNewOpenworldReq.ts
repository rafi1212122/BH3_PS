import net from "net"
import { GetNewOpenworldReq, GetNewOpenworldRsp, GetNewOpenworldRsp_CmdId, GetNewOpenworldRsp_Retcode, MechaSlot } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetNewOpenworldReq) => {
    Packet.getInstance().serializeAndSend(socket, GetNewOpenworldRsp_CmdId.CMD_ID, {
        retcode: GetNewOpenworldRsp_Retcode.SUCC,
        dataType: packet.dataType,
        mapList: [
            {
                mapId: 1,
                status: 1,
                cycle: 1,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 2,
                status: 0,
                cycle: 14,
                questLevel: 30,
                hasTakeFinishRewardCycle: 13
            },
            {
                mapId: 301,
                status: 0,
                cycle: 0,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 401,
                status: 0,
                cycle: 41,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 601,
                status: 0,
                cycle: 61,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 701,
                status: 2,
                cycle: 71,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 801,
                status: 2,
                cycle: 81,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            },
            {
                mapId: 1001,
                status: 2,
                cycle: 101,
                questLevel: 30,
                hasTakeFinishRewardCycle: 0
            }
        ],
        nextRefreshTime: 1679256000,
        closeTime: 1187592820,
        mechaPortList: [
            {
                slot: MechaSlot.MECHA_SLOT_LEFT_1,
                mechaId: 11
            },
            {
                slot: MechaSlot.MECHA_SLOT_LEFT_2,
                mechaId: 13
            },
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        questStar: 30,
        maxQuestLevel: 6
    } as GetNewOpenworldRsp)
}