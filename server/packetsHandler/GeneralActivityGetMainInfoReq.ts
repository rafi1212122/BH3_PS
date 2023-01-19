import net from "net"
import { GeneralActivityGetMainInfoReq, GeneralActivityGetMainInfoRsp, GeneralActivityGetMainInfoRsp_CmdId, GeneralActivityGetMainInfoRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GeneralActivityGetMainInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GeneralActivityGetMainInfoRsp_CmdId.CMD_ID, {
        retcode: GeneralActivityGetMainInfoRsp_Retcode.SUCC,
        activityList: [
            {
                generalBasicInfo: {
                    activityId: 40000085,
                    curScore: 0,
                    seriesActivityId: [
                        40000085
                    ],
                    scheduleId: 540
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000192,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000086,
                    curScore: 0,
                    seriesActivityId: [
                        40000086
                    ],
                    scheduleId: 541
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000193,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000087,
                    curScore: 0,
                    seriesActivityId: [
                        40000087
                    ],
                    scheduleId: 542
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000194,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000088,
                    curScore: 0,
                    seriesActivityId: [
                        40000088
                    ],
                    scheduleId: 543
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000195,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000117,
                    curScore: 0,
                    seriesActivityId: [
                        40000117
                    ],
                    scheduleId: 585
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000449,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000118,
                    curScore: 0,
                    seriesActivityId: [
                        40000118
                    ],
                    scheduleId: 586
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000450,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000119,
                    curScore: 0,
                    seriesActivityId: [
                        40000119
                    ],
                    scheduleId: 587
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000451,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000120,
                    curScore: 0,
                    seriesActivityId: [
                        40000120
                    ],
                    scheduleId: 588
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000452,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000130,
                    curScore: 0,
                    seriesActivityId: [
                        40000130
                    ],
                    scheduleId: 606
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000479,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000131,
                    curScore: 0,
                    seriesActivityId: [
                        40000131
                    ],
                    scheduleId: 619
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000480,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000133,
                    curScore: 0,
                    seriesActivityId: [
                        40000133
                    ],
                    scheduleId: 626
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000481,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000134,
                    curScore: 0,
                    seriesActivityId: [
                        40000134
                    ],
                    scheduleId: 627
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000482,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000135,
                    curScore: 0,
                    seriesActivityId: [
                        40000135
                    ],
                    scheduleId: 628
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000483,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000136,
                    curScore: 0,
                    seriesActivityId: [
                        40000136
                    ],
                    scheduleId: 629
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000484,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000137,
                    curScore: 0,
                    seriesActivityId: [
                        40000137
                    ],
                    scheduleId: 630
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000485,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000138,
                    curScore: 0,
                    seriesActivityId: [
                        40000138
                    ],
                    scheduleId: 631
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000486,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000139,
                    curScore: 0,
                    seriesActivityId: [
                        40000139
                    ],
                    scheduleId: 632
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000487,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000140,
                    curScore: 0,
                    seriesActivityId: [
                        40000140
                    ],
                    scheduleId: 633
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000488,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000142,
                    curScore: 0,
                    seriesActivityId: [
                        40000142
                    ],
                    scheduleId: 640
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000489,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000143,
                    curScore: 0,
                    seriesActivityId: [
                        40000143
                    ],
                    scheduleId: 641
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000490,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000144,
                    curScore: 0,
                    seriesActivityId: [
                        40000144
                    ],
                    scheduleId: 642
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000491,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000147,
                    curScore: 0,
                    seriesActivityId: [
                        40000147
                    ],
                    scheduleId: 650
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000502,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000148,
                    curScore: 0,
                    seriesActivityId: [
                        40000148
                    ],
                    scheduleId: 651
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000503,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000149,
                    curScore: 0,
                    seriesActivityId: [
                        40000149
                    ],
                    scheduleId: 664
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000504,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000150,
                    curScore: 0,
                    seriesActivityId: [
                        40000150
                    ],
                    scheduleId: 665
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000505,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000151,
                    curScore: 0,
                    seriesActivityId: [
                        40000151
                    ],
                    scheduleId: 666
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000506,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000155,
                    curScore: 0,
                    seriesActivityId: [
                        40000155
                    ],
                    scheduleId: 681
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000507,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000156,
                    curScore: 0,
                    seriesActivityId: [
                        40000156
                    ],
                    scheduleId: 682
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000508,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000164,
                    curScore: 0,
                    seriesActivityId: [
                        40000164
                    ],
                    scheduleId: 686
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000509,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000165,
                    curScore: 0,
                    seriesActivityId: [
                        40000165
                    ],
                    scheduleId: 687
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000510,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000166,
                    curScore: 0,
                    seriesActivityId: [
                        40000166
                    ],
                    scheduleId: 688
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000511,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000167,
                    curScore: 0,
                    seriesActivityId: [
                        40000167
                    ],
                    scheduleId: 689
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000512,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000168,
                    curScore: 0,
                    seriesActivityId: [
                        40000168
                    ],
                    scheduleId: 691
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000513,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000169,
                    curScore: 0,
                    seriesActivityId: [
                        40000169
                    ],
                    scheduleId: 692
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000514,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000171,
                    curScore: 0,
                    seriesActivityId: [
                        40000171
                    ],
                    scheduleId: 697
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000516,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000172,
                    curScore: 0,
                    seriesActivityId: [
                        40000172
                    ],
                    scheduleId: 699
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000517,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000173,
                    curScore: 0,
                    seriesActivityId: [
                        40000173
                    ],
                    scheduleId: 700
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000518,
                            beginTime: 1593223200,
                            endTime: 1913140799
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000174,
                    curScore: 0,
                    seriesActivityId: [
                        40000174
                    ],
                    scheduleId: 701
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000519,
                            beginTime: 1593223200,
                            endTime: 2069006340
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000175,
                    curScore: 0,
                    seriesActivityId: [
                        40000175
                    ],
                    scheduleId: 702
                },
                activityStage: {
                    enterTimes: 0,
                    exchangeTimes: 0,
                    curScore: 0,
                    bonusScoreTimes: 0,
                    stageGroupScheduleList: [
                        {
                            stageGroupId: 40000520,
                            beginTime: 1593223200,
                            endTime: 2069006340
                        }
                    ]
                }
            },
            {
                generalBasicInfo: {
                    activityId: 40000221,
                    curScore: 0,
                    seriesActivityId: [
                        40000221
                    ],
                    scheduleId: 694
                },
                pushTowerInfo: {
                    enterTimes: 0,
                    isClearRewardTaken: false,
                    growBuffLevel: 0
                }
            }
        ]
    } as GeneralActivityGetMainInfoRsp)
}