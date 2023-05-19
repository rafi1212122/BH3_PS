import { isDocument } from "@typegoose/typegoose";
import { FinishGuideReportReq, FinishGuideReportRsp, FinishGuideReportRsp_CmdId, FinishGuideReportRsp_Retcode, GetAvatarDataReq_CmdId, GetEquipmentDataReq_CmdId } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import GetEquipmentDataReq from "./GetEquipmentDataReq";
import GetAvatarDataReq from "./GetAvatarDataReq";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as FinishGuideReportReq
    const { user } = session.player

    // if((data.guideIdList?.includes(1500) || data.guideIdList?.includes(1507)) && isDocument(user.equipment)) {
    //     await user.addAvatar(201, user.equipment)
    //     await GetEquipmentDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetEquipmentDataReq_CmdId.CMD_ID))
    //     await GetAvatarDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetAvatarDataReq_CmdId.CMD_ID))
    // }

    const rsp = Packet.encode(FinishGuideReportRsp, {
        retcode: FinishGuideReportRsp_Retcode.SUCC,
        guideIdList: data.guideIdList,
        isFinish: true
    }, FinishGuideReportRsp_CmdId.CMD_ID)

    session.send(rsp)
}