import net from "net"
import { GetEquipmentDataReq, GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../../BengHuai"
import GameServer from "../GameServer"
import Packet from "../Packet"
import { getWeapons } from "../../mongodb/Model/Weapon"
import { getItems } from "../../mongodb/Model/Item"

export default async (socket: net.Socket, packet: GetEquipmentDataReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
            retcode: GetEquipmentDataRsp_Retcode.FAIL
        } as GetEquipmentDataRsp)
    }

    Packet.getInstance().serializeAndSend(socket, GetEquipmentDataRsp_CmdId.CMD_ID, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        weaponList: (await getWeapons(user?.uid)).map((weapon)=>({
            id: weapon.id,
            uniqueId: weapon.uniqueId,
            level: weapon.level,
            exp: weapon.exp,
            isExtracted: weapon.isExtracted,
            isProtected: weapon.isProtected,
        })),
        // stigmataList: [
        //     {
        //         uniqueId: 101,
        //         id: 30007,
        //         level: 5,
        //         exp: 0,
        //         isProtected: false,
        //         slotNum: 0,
        //         refineValue: 0,
        //         promoteTimes: 0
        //     },
        //     {
        //         uniqueId: 102,
        //         id: 30060,
        //         level: 5,
        //         exp: 0,
        //         isProtected: false,
        //         slotNum: 1,
        //         runeList: [
        //             {
        //                 runeId: 30112,
        //                 strengthPercent: 29
        //             }
        //         ],
        //         refineValue: 0,
        //         promoteTimes: 0
        //     },
        //     {
        //         uniqueId: 103,
        //         id: 30113,
        //         level: 5,
        //         exp: 0,
        //         isProtected: false,
        //         slotNum: 1,
        //         runeList: [
        //             {
        //                 runeId: 50022,
        //                 strengthPercent: 66
        //             }
        //         ],
        //         refineValue: 0,
        //         promoteTimes: 0
        //     },
        //     {
        //         uniqueId: 104,
        //         id: 30010,
        //         level: 5,
        //         exp: 0,
        //         isProtected: false,
        //         slotNum: 1,
        //         runeList: [
        //             {
        //                 runeId: 50022,
        //                 strengthPercent: 9
        //             }
        //         ],
        //         refineValue: 0,
        //         promoteTimes: 0
        //     },
        //     {
        //         uniqueId: 105,
        //         id: 30063,
        //         level: 5,
        //         exp: 0,
        //         isProtected: false,
        //         slotNum: 1,
        //         runeList: [
        //             {
        //                 runeId: 50021,
        //                 strengthPercent: 70
        //             }
        //         ],
        //         refineValue: 0,
        //         promoteTimes: 0
        //     },
        //     {
        //         uniqueId: 106,
        //         id: 30116,
        //         level: 5,
        //         exp: 0,
        //         isProtected: false,
        //         slotNum: 0,
        //         refineValue: 0,
        //         promoteTimes: 0
        //     }
        // ],
        materialList: (await getItems(user.uid)).map(item=>({
            id: item.id,
            num: item.num
        })),
        isAll: true,
        vitalityValue: 0
    } as GetEquipmentDataRsp)
}