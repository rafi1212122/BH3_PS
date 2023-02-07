import net from "net"
import { GetStageChapterReq, GetStageChapterRsp, GetStageChapterRsp_CmdId, GetStageChapterRsp_Retcode, StageChapterInfo } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetStageChapterReq) => {
    Packet.getInstance().serializeAndSend(socket, GetStageChapterRsp_CmdId.CMD_ID, {
        retcode: GetStageChapterRsp_Retcode.SUCC,
        chapterList: [
            {
                "chapterId": 1,
                "hasTakeChallenge": "0",
            },
            {
                "chapterId": 2,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 3,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 4,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 5,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 6,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 7,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 8,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 9,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 10,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 11,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 12,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 13,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 14,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 15,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 16,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 17,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 18,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 19,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 20,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 21,
                "hasTakeChallenge": "0",
                "bossList": [
                    {
                        "bossStageId": 1213415,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 1213416,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 1213417,
                        "leftHp": 100
                    }
                ]
            },
            {
                "chapterId": 22,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 23,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 24,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 25,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 26,
                "hasTakeChallenge": "0",
                "bossList": [
                    {
                        "bossStageId": 32601,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 32602,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 32603,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 32604,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 32605,
                        "leftHp": 100
                    },
                    {
                        "bossStageId": 32606,
                        "leftHp": 100
                    }
                ]
            },
            {
                "chapterId": 27,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 28,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 29,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 30,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 31,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 32,
                "hasTakeChallenge": "0"
            },
            {
                "chapterId": 33,
                "hasTakeChallenge": "0",
            }
        ] as unknown as Partial<StageChapterInfo>[]
    } as GetStageChapterRsp)
}