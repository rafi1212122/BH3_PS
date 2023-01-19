import net from "net"
import { GetAdventureGroupReq, GetAdventureGroupRsp, GetAdventureGroupRsp_CmdId, GetAdventureGroupRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAdventureGroupReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAdventureGroupRsp_CmdId.CMD_ID, {
        retcode: GetAdventureGroupRsp_Retcode.SUCC,
        level: 1,
        badge: 0,
        lastExamination: 0,
        avatarList: [
            {
                avatarId: 101
            },
        ],
        availableQuestList: [
            {
                poolId: 6,
                questId: 15003
            },
            {
                poolId: 8,
                questId: 17003
            },
            {
                poolId: 12,
                questId: 21003
            },
            {
                poolId: 13,
                questId: 22003
            },
            {
                poolId: 14,
                questId: 23001
            },
            {
                poolId: 16,
                questId: 25003
            }
        ],
        grain: 50000,
        hasTakeRewardLevel: 0,
        storageScoin: 50000,
        storageStamina: 60,
        decorationSlotList: [
            {
                slotId: 1,
                furnitureId: 0,
                direction: 0
            },
            {
                slotId: 2,
                furnitureId: 0,
                direction: 0
            }
        ],
        facilityLevelList: [
            {
                facilityType: 1,
                level: 0
            },
            {
                facilityType: 2,
                level: 0
            },
            {
                facilityType: 3,
                level: 0
            },
            {
                facilityType: 4,
                level: 0
            },
            {
                facilityType: 5,
                level: 0
            },
            {
                facilityType: 6,
                level: 0
            },
            {
                facilityType: 7,
                level: 0
            },
            {
                facilityType: 8,
                level: 0
            },
            {
                facilityType: 9,
                level: 0
            },
            {
                facilityType: 10,
                level: 0
            }
        ],
        todayResetQuestNum: 0
    } as GetAdventureGroupRsp)
}