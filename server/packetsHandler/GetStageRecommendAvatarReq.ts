import net from "net"
import { GetStageRecommendAvatarReq, GetStageRecommendAvatarRsp, GetStageRecommendAvatarRsp_CmdId, GetStageRecommendAvatarRsp_Retcode, AvatarRecommendType, AvatarRecommendSource } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetStageRecommendAvatarReq) => {
    Packet.getInstance().serializeAndSend(socket, GetStageRecommendAvatarRsp_CmdId.CMD_ID, {
        retcode: GetStageRecommendAvatarRsp_Retcode.SUCC,
        stageRecommendAvatarList: packet.idList.map(id=>{
            return{
                id,
                recommendAvatarList: [
                    {
                        source: AvatarRecommendSource.AVATAR_RECOMMEND_SOURCE_DESIGN_DATA,
                        battleRate: 0.0,
                        battleTimes: 0,
                        recommendStyle: 0,
                        rank: 0,
                        lineupInfo: {
                            avatarInfoList: [
                                {
                                    avatarId: 3401,
                                    avatarLevel: 80,
                                    avatarStar: 3,
                                    dressId: 0,
                                    isArtifactSwitchOn: false,
                                    stigmataIdList: [
                                        34594,
                                        34604,
                                        34614
                                    ],
                                    weaponId: 21751
                                }
                            ]
                        }
                    }
                ],
                type: AvatarRecommendType.AVATAR_RECOMMEND_ULTRA_ENDLESS
            }
        })
    } as GetStageRecommendAvatarRsp)
}