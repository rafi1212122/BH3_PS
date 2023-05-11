import { GetPlayerCardRsp, GetPlayerCardRsp_CmdId, GetPlayerCardRsp_Retcode, PlayerCardType } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetPlayerCardRsp, {
        retcode: GetPlayerCardRsp_Retcode.SUCC,
        type: PlayerCardType.CARD_ALL,
        avatarIdList: [0, 0, 0],
        elfIdList: [0],
        medalList: [
            {
              id: 0,
              endTime: 0,
              extraParam: 0
            },
            {
              id: 0,
              endTime: 0,
              extraParam: 0
            }
        ]
    }, GetPlayerCardRsp_CmdId.CMD_ID)

    session.send(rsp)
}