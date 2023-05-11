import dayjs from "dayjs";
import { GetInviteActivityInviteeDataRsp, GetInviteActivityInviteeDataRsp_CmdId, GetInviteActivityInviteeDataRsp_Retcode, InviteeActivityType } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetInviteActivityInviteeDataRsp, {
        retcode: GetInviteActivityInviteeDataRsp_Retcode.SUCC,
        inviteeActivityInfoList: [
            {
                scheduleId: 1,
                activityType: InviteeActivityType.INVITEE_ACTIVITY_TYPE_NEWBIE
            }
        ]
    }, GetInviteActivityInviteeDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}