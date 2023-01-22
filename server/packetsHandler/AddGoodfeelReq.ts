import net from "net"
import { AddGoodfeelReq, AddGoodfeelRsp, AddGoodfeelRsp_CmdId, AddGoodfeelRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"
import GameServer from "../GameServer"
import Avatar from "../../mongodb/Model/Avatar"

export default async (socket: net.Socket, packet: AddGoodfeelReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, AddGoodfeelRsp_CmdId.CMD_ID, {
            retcode: AddGoodfeelRsp_Retcode.FAIL,
        } as AddGoodfeelRsp)

    }
    if(typeof packet.addGoodfeel!=="number"){
        return Packet.getInstance().serializeAndSend(socket, AddGoodfeelRsp_CmdId.CMD_ID, {
            retcode: AddGoodfeelRsp_Retcode.FAIL,
        } as AddGoodfeelRsp)
    }
    const updatedAvatar = (await Avatar.findOneAndUpdate({
        avatarId: packet.avatarId,
        userUid: user.uid,
    }, {
        $inc: {
            touchGoodfeel: packet.addGoodfeel
        }
    }, { returnDocument: 'after' } )).value

    if(!updatedAvatar){
        return Packet.getInstance().serializeAndSend(socket, AddGoodfeelRsp_CmdId.CMD_ID, {
            retcode: AddGoodfeelRsp_Retcode.AVATAR_NOT_EXIST,
        } as AddGoodfeelRsp)
    }

    Packet.getInstance().serializeAndSend(socket, AddGoodfeelRsp_CmdId.CMD_ID, {
        retcode: AddGoodfeelRsp_Retcode.SUCC,
        avatarList: [
            {
                avatarId: updatedAvatar.avatarId,
                star: updatedAvatar.star,
                level: updatedAvatar.level,
                exp: updatedAvatar.exp,
                fragment: updatedAvatar.fragment,
                weaponUniqueId: updatedAvatar.weaponUniqueId,
                stigmataUniqueId1: updatedAvatar.stigmataUniqueId1,
                stigmataUniqueId2: updatedAvatar.stigmataUniqueId2,
                stigmataUniqueId3: updatedAvatar.stigmataUniqueId3,
                skillList: updatedAvatar.skillList,
                touchGoodfeel: updatedAvatar.touchGoodfeel,
                todayHasAddGoodfeel: updatedAvatar.touchGoodfeel,
                dressList: [
                    59101
                ],
                dressId: 59101,
                subStar: 0
            }
        ],
        isAll: true
    } as AddGoodfeelRsp)

    Packet.getInstance().serializeAndSend(socket, AddGoodfeelRsp_CmdId.CMD_ID, {
        retcode: AddGoodfeelRsp_Retcode.SUCC,
    } as AddGoodfeelRsp)
}