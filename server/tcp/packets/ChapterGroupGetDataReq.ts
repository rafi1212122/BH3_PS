import { ChapterGroupGetDataReq, ChapterGroupGetDataRsp, ChapterGroupGetDataRsp_CmdId, ChapterGroupGetDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as ChapterGroupGetDataReq

	const rsp = Packet.encode(ChapterGroupGetDataRsp, {
        retcode: ChapterGroupGetDataRsp_Retcode.SUCC,
        chapterGroupList: [
            {
              "id": 1,
              "siteList": [
                {
                  "siteId": 1,
                  "chapterId": 1,
                  "status": 3
                },
                {
                  "siteId": 2,
                  "chapterId": 2,
                  "status": 3
                }
              ]
            },
            {
              "id": 2,
              "siteList": [
                {
                  "siteId": 3,
                  "chapterId": 3,
                  "status": 3
                },
                {
                  "siteId": 4,
                  "chapterId": 4,
                  "status": 3
                },
                {
                  "siteId": 5,
                  "chapterId": 5,
                  "status": 3
                },
                {
                  "siteId": 6,
                  "chapterId": 6,
                  "status": 3
                }
              ]
            },
            {
              "id": 3,
              "siteList": [
                {
                  "siteId": 7,
                  "chapterId": 7,
                  "status": 3
                },
                {
                  "siteId": 8,
                  "chapterId": 8,
                  "status": 3
                },
                {
                  "siteId": 9,
                  "chapterId": 9,
                  "status": 3
                },
                {
                  "siteId": 10,
                  "chapterId": 10,
                  "status": 3
                },
                {
                  "siteId": 11,
                  "chapterId": 11,
                  "status": 3
                }
              ]
            },
            {
              "id": 4,
              "siteList": [
                {
                  "siteId": 12,
                  "chapterId": 12,
                  "status": 3
                },
                {
                  "siteId": 13,
                  "chapterId": 13,
                  "status": 3
                },
                {
                  "siteId": 14,
                  "chapterId": 14,
                  "status": 3
                },
                {
                  "siteId": 15,
                  "chapterId": 15,
                  "status": 3
                }
              ]
            },
            {
              "id": 5,
              "siteList": [
                {
                  "siteId": 16,
                  "chapterId": 16,
                  "status": 3
                },
                {
                  "siteId": 17,
                  "chapterId": 17,
                  "status": 3
                }
              ]
            },
            {
              "id": 6,
              "siteList": [
                {
                  "siteId": 18,
                  "chapterId": 18,
                  "status": 3
                },
                {
                  "siteId": 19,
                  "chapterId": 19,
                  "status": 3
                },
                {
                  "siteId": 20,
                  "chapterId": 20,
                  "status": 3
                }
              ]
            },
            {
              "id": 7,
              "siteList": [
                {
                  "siteId": 21,
                  "chapterId": 21,
                  "status": 3
                },
                {
                  "siteId": 22,
                  "chapterId": 22,
                  "status": 3
                }
              ]
            },
            {
              "id": 8,
              "siteList": [
                {
                  "siteId": 23,
                  "chapterId": 23,
                  "status": 3
                },
                {
                  "siteId": 24,
                  "chapterId": 24,
                  "status": 3
                },
                {
                  "siteId": 25,
                  "chapterId": 25,
                  "status": 3
                }
              ]
            },
            {
              "id": 9,
              "siteList": [
                {
                  "siteId": 26,
                  "chapterId": 26,
                  "status": 3
                },
                {
                  "siteId": 27,
                  "chapterId": 27,
                  "status": 3
                },
                {
                  "siteId": 28,
                  "chapterId": 28,
                  "status": 3
                }
              ]
            },
            {
              "id": 10,
              "siteList": [
                {
                  "siteId": 29,
                  "chapterId": 29,
                  "status": 3
                },
                {
                  "siteId": 30,
                  "chapterId": 30,
                  "status": 2
                }
              ]
            },
            {
              "id": 11,
              "siteList": [
                {
                  "siteId": 31,
                  "chapterId": 31,
                  "status": 2
                }
              ]
            },
            {
              "id": 12,
              "siteList": [
                {
                  "siteId": 32,
                  "chapterId": 32,
                  "status": 3
                },
                {
                  "siteId": 33,
                  "chapterId": 33,
                  "status": 3
                },
                {
                  "siteId": 34,
                  "chapterId": 34,
                  "status": 2
                }
              ]
            },
            {
              "id": 13,
              "siteList": [
                {
                  "siteId": 36,
                  "chapterId": 36,
                  "status": 2
                }
              ]
            }
        ],
        isAll: true,
        chapterGroupId: data.chapterGroupId
    }, ChapterGroupGetDataRsp_CmdId.CMD_ID);
    
	session.send(rsp);
};