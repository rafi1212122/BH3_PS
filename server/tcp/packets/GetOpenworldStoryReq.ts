import { GetOpenworldStoryReq, GetOpenworldStoryRsp, GetOpenworldStoryRsp_CmdId, GetOpenworldStoryRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetOpenworldStoryRsp, {
        retcode: GetOpenworldStoryRsp_Retcode.SUCC,
        curStoryList: [],
        finishStoryIdAddList: [],
        finishStoryIdDelList: [],
        finishStoryIdList: [],
        isAll: true
    }, GetOpenworldStoryRsp_CmdId.CMD_ID)

    session.send(rsp)
}