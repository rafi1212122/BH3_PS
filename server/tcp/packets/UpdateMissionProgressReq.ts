import { UpdateMissionProgressRsp, UpdateMissionProgressRsp_CmdId, UpdateMissionProgressRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(UpdateMissionProgressRsp, {
        retcode: UpdateMissionProgressRsp_Retcode.SUCC
    }, UpdateMissionProgressRsp_CmdId.CMD_ID)

    session.send(rsp)
}