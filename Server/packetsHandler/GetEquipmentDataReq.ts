import net from "net"
import { GetEquipmentDataReq, GetEquipmentDataRsp, GetEquipmentDataRsp_Retcode, Material, Mecha, Stigmata } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetEquipmentDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetEquipmentDataRsp'], {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        isAll: true,
        vitalityValue: 0,
        weaponList: [
            {
                uniqueId: 101,
                id: 20001,
                level: 1,
                exp: 0,
                isProtected: true,
                isExtracted: false
            }
        ],
        mechaList: [] as Mecha[],
        stigmataList: [] as Stigmata[],
        materialList: [] as Material[],
    } as GetEquipmentDataRsp)
    socket.write(reply)
}