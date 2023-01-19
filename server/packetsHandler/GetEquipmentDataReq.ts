import net from "net"
import logger from "../../util/logger"
import { GetEquipmentDataReq, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode, Material, Mecha, Stigmata } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetEquipmentDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        weaponList: [
            {
                uniqueId: 101,
                id: 20001,
                level: 1,
                exp: 0,
                isProtected: false,
                isExtracted: false
            },
            {
                uniqueId: 102,
                id: 20050,
                level: 5,
                exp: 0,
                isProtected: false,
                isExtracted: false
            },
            {
                uniqueId: 103,
                id: 20168,
                level: 11,
                exp: 248,
                isProtected: false,
                isExtracted: false
            },
            {
                uniqueId: 104,
                id: 20081,
                level: 1,
                exp: 0,
                isProtected: false,
                isExtracted: false
            },
            {
                uniqueId: 105,
                id: 20242,
                level: 15,
                exp: 0,
                isProtected: false,
                isExtracted: false
            },
            {
                uniqueId: 383,
                id: 21053,
                level: 45,
                exp: 0,
                isProtected: true,
                isExtracted: false
            },
        ],
        stigmataList: [
            {
                uniqueId: 101,
                id: 30007,
                level: 5,
                exp: 0,
                isProtected: false,
                slotNum: 0,
                refineValue: 0,
                promoteTimes: 0
            },
            {
                uniqueId: 102,
                id: 30060,
                level: 5,
                exp: 0,
                isProtected: false,
                slotNum: 1,
                runeList: [
                    {
                        runeId: 30112,
                        strengthPercent: 29
                    }
                ],
                refineValue: 0,
                promoteTimes: 0
            },
            {
                uniqueId: 103,
                id: 30113,
                level: 5,
                exp: 0,
                isProtected: false,
                slotNum: 1,
                runeList: [
                    {
                        runeId: 50022,
                        strengthPercent: 66
                    }
                ],
                refineValue: 0,
                promoteTimes: 0
            },
            {
                uniqueId: 104,
                id: 30010,
                level: 5,
                exp: 0,
                isProtected: false,
                slotNum: 1,
                runeList: [
                    {
                        runeId: 50022,
                        strengthPercent: 9
                    }
                ],
                refineValue: 0,
                promoteTimes: 0
            },
            {
                uniqueId: 105,
                id: 30063,
                level: 5,
                exp: 0,
                isProtected: false,
                slotNum: 1,
                runeList: [
                    {
                        runeId: 50021,
                        strengthPercent: 70
                    }
                ],
                refineValue: 0,
                promoteTimes: 0
            },
            {
                uniqueId: 106,
                id: 30116,
                level: 5,
                exp: 0,
                isProtected: false,
                slotNum: 0,
                refineValue: 0,
                promoteTimes: 0
            }
        ],
        materialList: [
            {
                id: 5,
                num: 900
            },
            {
                id: 100,
                num: 320186
            },
            {
                id: 803,
                num: 10
            },
            {
                id: 1001,
                num: 46
            },
            {
                id: 1003,
                num: 11
            },
            {
                id: 1301,
                num: 8
            },
            {
                id: 3000,
                num: 69
            },
            {
                id: 3007,
                num: 10
            },
            {
                id: 3122,
                num: 27
            },
            {
                id: 4004,
                num: 1
            },
            {
                id: 7032,
                num: 20
            },
            {
                id: 7159,
                num: 42
            }
        ],
        isAll: true,
        vitalityValue: 0
    } as GetEquipmentDataRsp)
}