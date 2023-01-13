import net from "net"
import Packet from "../Packet"
import { prisma } from '../../util/prismaConnect'
import GameServer from "../GameServer"
import { AccountType, CGType, GetMpDataRsp, GetMpDataRsp_CmdId, GetMpDataRsp_OpType, GetMpDataRsp_Retcode, MpDataType, PlayerLoginReq, PlayerLoginRsp, PlayerLoginRsp_CmdId, PlayerLoginRsp_Retcode } from "../../BengHuai"
import config from "../../config"

export default async (socket: net.Socket, packet: PlayerLoginReq, cmdId: number) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, PlayerLoginRsp_CmdId.CMD_ID, {
            retcode: PlayerLoginRsp_Retcode['FAIL'],
            msg: 'Login failed try restating the game'
        } as PlayerLoginRsp)
    }
    Packet.getInstance().serializeAndSend(socket, PlayerLoginRsp_CmdId.CMD_ID, {
        retcode: PlayerLoginRsp_Retcode['SUCC'],
        regionName: config.regionName,
        cgType: user.isFirstLogin?CGType.CG_START:CGType.CG_SEVEN_CHAPTER,
        regionId: 248,
        loginSessionToken: GameServer.getInstance().sessions.size,
        lastLogoutTime: 0,
        lastClientPacketId: 0
    } as PlayerLoginRsp)
    
    Packet.getInstance().serializeAndSend(socket, GetMpDataRsp_CmdId.CMD_ID, {
        retcode: GetMpDataRsp_Retcode.SUCC,
        dataType: MpDataType.MP_DATA_PUNISH_TIME,
        opType: GetMpDataRsp_OpType.UPDATE_DATA,
        punishEndTime: 0
    } as GetMpDataRsp)

    if(user.isFirstLogin){
        await prisma.avatar.createMany({
            data: [{
                avatarId: 101,
                star: 1,
                level: 1,
                exp: 0,
                fragment: 0,
                weaponUniqueId: 103,
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
                dressList: [
                    59101
                ],
                dressId: 59101,
                userUid: user.uid
            },
            {
                avatarId: 201,
                star: 1,
                level: 7,
                exp: 46,
                fragment: 0,
                weaponUniqueId: 102,
                stigmataUniqueId1: 104,
                stigmataUniqueId2: 105,
                stigmataUniqueId3: 106,
                skillList: [
                    {
                        skillId: 51
                    },
                    {
                        skillId: 52,
                        subSkillList: [
                            {
                                subSkillId: 506,
                                level: 1,
                                isMask: false
                            }
                        ]
                    },
                    {
                        skillId: 53
                    },
                    {
                        skillId: 54
                    },
                    {
                        skillId: 55
                    }
                ],
                dressList: [
                    59201
                ],
                dressId: 59201,
                userUid: user.uid
            },
            {
                avatarId: 105,
                star: 3,
                level: 80,
                exp: 3696,
                fragment: 5,
                weaponUniqueId: 514,
                stigmataUniqueId1: 308,
                stigmataUniqueId2: 295,
                stigmataUniqueId3: 333,
                skillList: [
                    {
                        skillId: 641,
                        subSkillList: [
                            {
                                subSkillId: 6413,
                                level: 10,
                                isMask: false
                            },
                            {
                                subSkillId: 6415,
                                level: 10,
                                isMask: false
                            }
                        ]
                    },
                    {
                        skillId: 642,
                        subSkillList: [
                            {
                                subSkillId: 6403,
                                level: 6,
                                isMask: false
                            },
                            {
                                subSkillId: 6411,
                                level: 6,
                                isMask: false
                            }
                        ]
                    },
                    {
                        skillId: 643,
                        subSkillList: [
                            {
                                subSkillId: 6404,
                                level: 1,
                                isMask: false
                            },
                            {
                                subSkillId: 6405,
                                level: 10,
                                isMask: false
                            },
                            {
                                subSkillId: 6416,
                                level: 6,
                                isMask: false
                            }
                        ]
                    },
                    {
                        skillId: 644,
                        subSkillList: [
                            {
                                subSkillId: 6407,
                                level: 3,
                                isMask: false
                            },
                            {
                                subSkillId: 6408,
                                level: 6,
                                isMask: false
                            }
                        ]
                    },
                    {
                        skillId: 645
                    },
                    {
                        skillId: 646,
                        subSkillList: [
                            {
                                subSkillId: 6410,
                                level: 3,
                                isMask: false
                            },
                            {
                                subSkillId: 6412,
                                level: 6,
                                isMask: false
                            },
                            {
                                subSkillId: 6414,
                                level: 4,
                                isMask: false
                            }
                        ]
                    }
                ],
                dressList: [
                    59105
                ],
                dressId: 59105,
                userUid: user.uid
            },
            {
                avatarId: 317,
                star: 2,
                level: 32,
                exp: 2670,
                fragment: 11,
                weaponUniqueId: 383,
                stigmataUniqueId1: 0,
                stigmataUniqueId2: 0,
                stigmataUniqueId3: 0,
                skillList: [],
                dressList: [
                    59317
                ],
                dressId: 59317,
                userUid: user.uid
            }]
        })
    }
    
    session.user = await prisma.user.update({
        include: {
          avatars: true,
        },
        where: {
            uid: user.uid
        },
        data: {
            isFirstLogin: false,
        }
    })
}