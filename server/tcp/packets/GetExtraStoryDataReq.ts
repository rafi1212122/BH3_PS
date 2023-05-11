import { GetExtraStoryDataRsp, GetExtraStoryDataRsp_CmdId, GetExtraStoryDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
	const rsp = Packet.encode(GetExtraStoryDataRsp, {
        retcode: GetExtraStoryDataRsp_Retcode.SUCC,
        chapterList: [
            {
                chapterId: 12,
                minPlayerLevel: 30,
                areaList: [],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 13,
                minPlayerLevel: 40,
                areaList: [],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 101,
                minPlayerLevel: 24,
                areaList: [
                    {
                        areaId: 2401,
                        actList: [
                            {
                                actId: 40401,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40402,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40403,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40404,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2402,
                        actList: [
                            {
                                actId: 40405,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40406,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40407,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40408,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2403,
                        actList: [
                            {
                                actId: 40409,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40410,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40411,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2404,
                        actList: [
                            {
                                actId: 40412,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40413,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 102,
                minPlayerLevel: 30,
                areaList: [
                    {
                        areaId: 2405,
                        actList: [
                            {
                                actId: 40421,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40422,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40423,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40424,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40425,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40426,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40427,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40428,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 103,
                minPlayerLevel: 35,
                areaList: [
                    {
                        areaId: 2411,
                        actList: [
                            {
                                actId: 40501,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40502,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40503,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40504,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2412,
                        actList: [
                            {
                                actId: 40505,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40506,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40507,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40508,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2413,
                        actList: [
                            {
                                actId: 40509,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40510,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40511,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40512,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2414,
                        actList: [
                            {
                                actId: 40513,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40514,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40515,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40516,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 104,
                minPlayerLevel: 40,
                areaList: [
                    {
                        areaId: 2415,
                        actList: [
                            {
                                actId: 40521,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40522,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40523,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40524,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40525,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40526,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40527,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40528,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 105,
                minPlayerLevel: 45,
                areaList: [
                    {
                        areaId: 2421,
                        actList: [
                            {
                                actId: 40601,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40602,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40603,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40604,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2422,
                        actList: [
                            {
                                actId: 40605,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40606,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40607,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40608,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 106,
                minPlayerLevel: 45,
                areaList: [
                    {
                        areaId: 2425,
                        actList: [
                            {
                                actId: 40611,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40612,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40613,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40614,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 107,
                minPlayerLevel: 50,
                areaList: [
                    {
                        areaId: 2431,
                        actList: [
                            {
                                actId: 40701,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40702,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40703,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40704,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2432,
                        actList: [
                            {
                                actId: 40705,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40706,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40707,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40708,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2433,
                        actList: [
                            {
                                actId: 40709,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40710,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40711,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40712,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2434,
                        actList: [
                            {
                                actId: 40713,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40714,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40715,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40716,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1529632800,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 108,
                minPlayerLevel: 50,
                areaList: [
                    {
                        areaId: 2441,
                        actList: [
                            {
                                actId: 40801,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40802,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40803,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40804,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40805,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40806,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40807,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40808,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1529632800,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 109,
                minPlayerLevel: 55,
                areaList: [
                    {
                        areaId: 2451,
                        actList: [
                            {
                                actId: 40901,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40902,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40903,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40904,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40905,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 40906,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1529632800,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 110,
                minPlayerLevel: 55,
                areaList: [
                    {
                        areaId: 2461,
                        actList: [
                            {
                                actId: 41001,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41002,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41003,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41004,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1529632800,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1529632800,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 111,
                minPlayerLevel: 60,
                areaList: [
                    {
                        areaId: 2471,
                        actList: [
                            {
                                actId: 41101,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41102,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41103,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41104,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41105,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41106,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1533175200,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2472,
                        actList: [
                            {
                                actId: 41107,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41108,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41109,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41110,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1533175200,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1533175200,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 112,
                minPlayerLevel: 60,
                areaList: [
                    {
                        areaId: 2481,
                        actList: [
                            {
                                actId: 41201,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41202,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41203,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41204,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41205,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41206,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1533175200,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1533175200,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 113,
                minPlayerLevel: 30,
                areaList: [
                    {
                        areaId: 2491,
                        actList: [
                            {
                                actId: 41301,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41302,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41303,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41304,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2492,
                        actList: [
                            {
                                actId: 41305,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41306,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41307,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                    {
                        areaId: 2493,
                        actList: [
                            {
                                actId: 41308,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41309,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
            {
                chapterId: 114,
                minPlayerLevel: 60,
                areaList: [
                    {
                        areaId: 2501,
                        actList: [
                            {
                                actId: 41401,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41402,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41403,
                                beginTime: 0,
                                endTime: 0,
                            },
                            {
                                actId: 41404,
                                beginTime: 0,
                                endTime: 0,
                            },
                        ],
                        beginTime: 1518638400,
                        endTime: 1880136000,
                    },
                ],
                beginTime: 1518638400,
                endTime: 1880136000,
                isNeedKey: false,
            },
        ]
    }, GetExtraStoryDataRsp_CmdId.CMD_ID);

	session.send(rsp);
};
