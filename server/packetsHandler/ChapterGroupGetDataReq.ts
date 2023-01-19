import net from "net"
import { ChapterGroupGetDataReq, ChapterGroupGetDataRsp, ChapterGroupGetDataRsp_CmdId, ArmadaMatrixRetcode_Retcode, ChapterGroupGetDataRsp_Retcode, ChapterGroupSiteStatus } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: Partial<ChapterGroupGetDataReq>) => {
    Packet.getInstance().serializeAndSend(socket, ChapterGroupGetDataRsp_CmdId.CMD_ID, {
        retcode: ChapterGroupGetDataRsp_Retcode.SUCC,
        chapterGroupList: [
            {
                id: 1,
                siteList: [
                    {
                        siteId: 1,
                        chapterId: 1,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_UNLOCKED
                    },
                    {
                        siteId: 2,
                        chapterId: 2,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_LOCKED
                    }
                ]
            }
        ]
    } as ChapterGroupGetDataRsp)
}