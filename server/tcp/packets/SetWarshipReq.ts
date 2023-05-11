import { GetMainDataRsp, GetMainDataRsp_CmdId, SetWarshipReq, SetWarshipRsp, SetWarshipRsp_CmdId, SetWarshipRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as SetWarshipReq
    const { user } = session.player

    if(data.warshipId) {
        user.$set('warshipId', data.warshipId)
        await user.save()
    }

    const rsp = Packet.encode(SetWarshipRsp, {
        retcode: SetWarshipRsp_Retcode.SUCC
    }, SetWarshipRsp_CmdId.CMD_ID)

    session.send(Packet.encode(GetMainDataRsp, {
        warshipTheme: {
            warshipId: data.warshipId
        }
    }, GetMainDataRsp_CmdId.CMD_ID), rsp)
}