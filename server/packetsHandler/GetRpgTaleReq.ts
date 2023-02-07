import net from "net"
import { GetRpgTaleFileRsp_Retcode, GetRpgTaleReq, GetRpgTaleRsp, GetRpgTaleRsp_CmdId, GetRpgTaleRsp_Retcode, RpgTaleFlagType, RpgTaleSiteStatus } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRpgTaleReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRpgTaleRsp_CmdId.CMD_ID, {
        retcode: GetRpgTaleRsp_Retcode.SUCC,
        taleId: 0,
        isAll: true,
        rpgTaleList: [
            {
                taleId: 7001,
                siteList: [
                    {
                        siteId: 700111,
                        areaId: 70011,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_CONTENT_UNLOCKED
                    },
                    {
                        siteId: 700112,
                        areaId: 70011,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700111
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700113,
                        areaId: 70011,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700112
                                ]
                            },
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_AVATAR,
                                paramList: [
                                    711
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700121,
                        areaId: 70012,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PLAYER_LEVEL,
                                paramList: [
                                    21
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700122,
                        areaId: 70012,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700121
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700123,
                        areaId: 70012,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700122
                                ]
                            },
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_AVATAR,
                                paramList: [
                                    302
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700131,
                        areaId: 70013,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PLAYER_LEVEL,
                                paramList: [
                                    26
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700132,
                        areaId: 70013,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700131
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700133,
                        areaId: 70013,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700132
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700134,
                        areaId: 70013,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700133
                                ]
                            },
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_AVATAR,
                                paramList: [
                                    104
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700141,
                        areaId: 70014,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PLAYER_LEVEL,
                                paramList: [
                                    31
                                ]
                            }
                        ]
                    },
                    {
                        siteId: 700142,
                        areaId: 70014,
                        status: RpgTaleSiteStatus.RPG_TALE_SITE_STATUS_SHOW,
                        unlockLimitFlagList: [
                            {
                                type: RpgTaleFlagType.RPG_TALE_FLAG_PRE_SITE,
                                paramList: [
                                    700141
                                ]
                            }
                        ]
                    }
                ],
                curSiteId: 0,
                endTime: 1919275199,
                areaList: [
                    {
                        areaId: 70011
                    },
                    {
                        areaId: 70012
                    },
                    {
                        areaId: 70013
                    },
                    {
                        areaId: 70014
                    }
                ],
                scheduleId: 7001,
                siteRefreshNum: 0,
                lastResetSiteRefreshNumTime: 0,
                qavatarBattle: {
                    curScore: 0,
                    hasTakeRewardScore: 0,
                    chooseVirtualAvatarId: 0,
                    winNum: 0,
                    winStreak: 0,
                    virtualAvatarDropNum: 0
                }
            }
        ]
    } as GetRpgTaleRsp)
}