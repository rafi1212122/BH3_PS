import net from "net"
import logger from "../../util/logger"
import { GetEquipmentDataReq, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode, Material, Mecha, Stigmata } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetEquipmentDataReq, cmdId: number) => {
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
            }
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
            }
        ],
        isAll: true,
        vitalityValue: 0
    } as GetEquipmentDataRsp)
}