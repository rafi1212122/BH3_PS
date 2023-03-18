import net from 'net'
import { ChapterGroupGetDataReq, ChapterGroupGetDataRsp, ChapterGroupGetDataRsp_CmdId, ArmadaMatrixRetcode_Retcode, ChapterGroupGetDataRsp_Retcode, ChapterGroupSiteStatus } from '../../BengHuai'
import Packet from '../Packet'

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
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 2,
                        chapterId: 2,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 2,
                siteList: [
                    {
                        siteId: 3,
                        chapterId: 3,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 4,
                        chapterId: 4,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 5,
                        chapterId: 5,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 6,
                        chapterId: 6,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 3,
                siteList: [
                    {
                        siteId: 7,
                        chapterId: 7,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 8,
                        chapterId: 8,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 9,
                        chapterId: 9,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 10,
                        chapterId: 10,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 11,
                        chapterId: 11,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 4,
                siteList: [
                    {
                        siteId: 12,
                        chapterId: 12,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 13,
                        chapterId: 13,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 14,
                        chapterId: 14,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 15,
                        chapterId: 15,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 5,
                siteList: [
                    {
                        siteId: 16,
                        chapterId: 16,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 17,
                        chapterId: 17,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 6,
                siteList: [
                    {
                        siteId: 18,
                        chapterId: 18,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 19,
                        chapterId: 19,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 20,
                        chapterId: 20,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 7,
                siteList: [
                    {
                        siteId: 21,
                        chapterId: 21,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 22,
                        chapterId: 22,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 8,
                siteList: [
                    {
                        siteId: 23,
                        chapterId: 23,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 24,
                        chapterId: 24,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 25,
                        chapterId: 25,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 9,
                siteList: [
                    {
                        siteId: 26,
                        chapterId: 26,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 27,
                        chapterId: 27,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 28,
                        chapterId: 28,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    }
                ]
            },
            {
                id: 10,
                siteList: [
                    {
                        siteId: 29,
                        chapterId: 29,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 30,
                        chapterId: 30,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_UNLOCKED
                    }
                ]
            },
            {
                id: 11,
                siteList: [
                    {
                        siteId: 31,
                        chapterId: 31,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_UNLOCKED
                    }
                ]
            },
            {
                id: 12,
                siteList: [
                    {
                        siteId: 32,
                        chapterId: 32,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 33,
                        chapterId: 33,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_FINISHED
                    },
                    {
                        siteId: 34,
                        chapterId: 34,
                        status: ChapterGroupSiteStatus.CHAPTER_GROUP_SITE_STATUS_UNLOCKED
                    }
                ]
            }
        ],
        isAll: true
    } as ChapterGroupGetDataRsp)
}