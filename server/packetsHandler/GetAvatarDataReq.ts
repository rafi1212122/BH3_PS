import net from "net"
import logger from "../../util/logger"
import { GetAvatarDataReq, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAvatarDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetAvatarDataRsp_CmdId.CMD_ID, {
        retcode: GetAvatarDataRsp_Retcode.SUCC,
        avatarList: [
            {
                avatarId: 101,
                star: 1,
                level: 1,
                exp: 0,
                fragment: 0,
                weaponUniqueId: 101,
                stigmataUniqueId1: 101,
                stigmataUniqueId2: 102,
                stigmataUniqueId3: 103,
                skillList: [
                    {
                        skillId: 11
                    },
                    {
                        skillId: 12,
                        subSkillList: [
                            {
                                subSkillId: 102,
                                level: 1,
                                isMask: false
                            },
                            {
                                subSkillId: 104,
                                level: 1,
                                isMask: false
                            }
                        ]
                    },
                    {
                        skillId: 13
                    },
                    {
                        skillId: 15
                    }
                ],
                touchGoodfeel: 0,
                todayHasAddGoodfeel: 0,
                dressList: [
                    59101
                ],
                dressId: 59101,
                subStar: 0
            }
        ],
        isAll: true
    } as GetAvatarDataRsp)
}