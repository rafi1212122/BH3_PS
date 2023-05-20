import { ChapterBwWorldGetDataReq, ChapterBwWorldGetDataRsp, ChapterBwWorldGetDataRsp_CmdId, ChapterBwWorldGetDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as ChapterBwWorldGetDataReq

    const rsp = Packet.encode(ChapterBwWorldGetDataRsp, {
        retcode: ChapterBwWorldGetDataRsp_Retcode.SUCC,
        chapterBwWorld: {
            chapterId: data.chapterId,
            equipRuneUniqueIdList: [0, 0],
            rewardLineTakenProgress: 0
        }
    }, ChapterBwWorldGetDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}