import { GetEquipmentDataRsp, GetEquipmentDataRsp_CmdId, GetEquipmentDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { stigmatas, weapons, materials } = session.player

    const rsp = Packet.encode(GetEquipmentDataRsp, {
        retcode: GetEquipmentDataRsp_Retcode.SUCC,
        isAll: true,
        stigmataList: stigmatas,
        weaponList: weapons,
        materialList: materials,
        mechaList: [],
        vitalityValue: 0
    }, GetEquipmentDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}