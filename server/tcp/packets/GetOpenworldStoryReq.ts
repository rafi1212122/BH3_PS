import dayjs from "dayjs";
import { GetOpenworldStoryReq, GetOpenworldStoryRsp, GetOpenworldStoryRsp_CmdId, GetOpenworldStoryRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { openworldStories } = session.player

    const rsp = Packet.encode(GetOpenworldStoryRsp, {
        retcode: GetOpenworldStoryRsp_Retcode.SUCC,
        curStoryList: openworldStories.filter(ow => !ow.isFinished).map(i => ({ storyId: i.storyId, storyProgress: i.storyProgress, acceptTime: dayjs(i.get('createdAt')).unix() })),
        finishStoryIdList: openworldStories.filter(ow => ow.isFinished).map(i => i.storyId),
        isAll: true
    }, GetOpenworldStoryRsp_CmdId.CMD_ID)

    session.send(rsp)
}