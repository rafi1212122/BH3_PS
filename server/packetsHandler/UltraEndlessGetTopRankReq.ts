import net from "net"
import { UltraEndlessGetTopRankReq, UltraEndlessGetTopRankRsp, UltraEndlessGetTopRankRsp_CmdId, UltraEndlessGetTopRankRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"

export default (socket: net.Socket, packet: UltraEndlessGetTopRankReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user

    Packet.getInstance().serializeAndSend(socket, UltraEndlessGetTopRankRsp_CmdId.CMD_ID, {
        retcode: UltraEndlessGetTopRankRsp_Retcode.SUCC,
        scheduleId: 3204,
        rankData: {
            rankList: [
                {
                    "uid": user?.uid,
                    "score": 0,
                    "rank": 1,
                    "nickName": user?.name,
                    "avatarId": 2202,
                    "frameId": 200004,
                    "customHeadId": 162127,
                    "avatarInfoList": [
                        {
                            "avatarId": 804,
                            "avatarLevel": 80,
                            "avatarStar": 5,
                            "weaponId": 24314,
                            "stigmataIdList": [
                                34284,
                                34294,
                                34304
                            ],
                            "dressId": 50178,
                            "isArtifactSwitchOn": false
                        },
                        {
                            "avatarId": 612,
                            "avatarLevel": 80,
                            "avatarStar": 5,
                            "weaponId": 21724,
                            "stigmataIdList": [
                                33494,
                                33504,
                                30310
                            ],
                            "dressId": 59612,
                            "isArtifactSwitchOn": false
                        },
                        {
                            "avatarId": 2901,
                            "avatarLevel": 80,
                            "avatarStar": 5,
                            "weaponId": 24384,
                            "stigmataIdList": [
                                34454,
                                32084,
                                34474
                            ],
                            "dressId": 50176,
                            "isArtifactSwitchOn": false
                        }
                    ],
                    "elfInfoList": [
                        {
                            "elfId": 113,
                            "elfLevel": 80,
                            "elfStar": 7,
                            "skillList": [
                                {
                                    "skillId": 14001,
                                    "skillLevel": 1
                                },
                                {
                                    "skillId": 14002,
                                    "skillLevel": 1
                                },
                                {
                                    "skillId": 14003,
                                    "skillLevel": 1
                                },
                                {
                                    "skillId": 14004,
                                    "skillLevel": 1
                                },
                                {
                                    "skillId": 140011,
                                    "skillLevel": 5
                                },
                                {
                                    "skillId": 140012,
                                    "skillLevel": 3
                                },
                                {
                                    "skillId": 140013,
                                    "skillLevel": 5
                                },
                                {
                                    "skillId": 140021,
                                    "skillLevel": 5
                                },
                                {
                                    "skillId": 140022,
                                    "skillLevel": 3
                                },
                                {
                                    "skillId": 140023,
                                    "skillLevel": 3
                                },
                                {
                                    "skillId": 140031,
                                    "skillLevel": 5
                                },
                                {
                                    "skillId": 140032,
                                    "skillLevel": 5
                                },
                                {
                                    "skillId": 140041,
                                    "skillLevel": 5
                                },
                                {
                                    "skillId": 140042,
                                    "skillLevel": 3
                                }
                            ]
                        }
                    ],
                    "ultraEndlessGroupLevel": 9
                },
            ]
        }
    } as UltraEndlessGetTopRankRsp)
}