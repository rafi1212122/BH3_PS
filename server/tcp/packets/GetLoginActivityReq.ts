import dayjs from "dayjs";
import { GetLoginActivityRsp, GetLoginActivityRsp_CmdId, GetLoginActivityRsp_Retcode, PlayerCardType } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player

    const rsp = Packet.encode(GetLoginActivityRsp, {
        retcode: GetLoginActivityRsp_Retcode.SUCC,
        loginList: [
            {
                id: 581,
                loginDays: 1,
                acceptTime: dayjs(user.get('createdAt')).unix(),
                durationEndTime: dayjs().add(2, 'weeks').unix()
            }
        ]
    }, GetLoginActivityRsp_CmdId.CMD_ID)

    session.send(rsp)
}