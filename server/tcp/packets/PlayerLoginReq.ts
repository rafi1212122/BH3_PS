import { CGType, GetMpDataRsp, GetMpDataRsp_CmdId, GetMpDataRsp_OpType, GetMpDataRsp_Retcode, MpDataType, PlayerLoginReq, PlayerLoginRsp, PlayerLoginRsp_CmdId, PlayerLoginRsp_Retcode } from "../../../resources/proto/BengHuai";
import Config from "../../../utils/Config";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player

    const rsp = Packet.encode(PlayerLoginRsp, {
        retcode: PlayerLoginRsp_Retcode.SUCC,
        isFirstLogin: user.isFirstLogin,
        regionName: Config.GAMESERVER.REGION_NAME,
        cgType: user.isFirstLogin ? CGType.CG_START : CGType.CG_SEVEN_CHAPTER
    }, PlayerLoginRsp_CmdId.CMD_ID)

    session.send(rsp, Packet.encode(GetMpDataRsp, {
        retcode: GetMpDataRsp_Retcode.SUCC,
        dataType: MpDataType.MP_DATA_PUNISH_TIME,
        opType: GetMpDataRsp_OpType.UPDATE_DATA,
        punishEndTime: 0
    }, GetMpDataRsp_CmdId.CMD_ID))
}