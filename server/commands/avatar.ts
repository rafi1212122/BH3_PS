import { isDocument } from "@typegoose/typegoose";
import { Avatar, GetAvatarDataReq_CmdId, GetAvatarDataRsp, GetAvatarDataRsp_CmdId, GetAvatarDataRsp_Retcode } from "../../resources/proto/BengHuai";
import Packet from "../tcp/Packet";
import Session from "../tcp/Session";
import Player from "../tcp/game/Player";
import GetAvatarDataReq from "../tcp/packets/GetAvatarDataReq";
import GetEquipmentDataReq from "../tcp/packets/GetEquipmentDataReq";
import { GetEquipmentDataReq_CmdId } from "../../resources/proto/BengHuai";

export default async (instance: Session | Player, ...args: string[]) => {
    let session: Session | undefined
    let player: Player

    if (instance instanceof Session) {
        session = instance
        player = instance.player
    } else { player = instance }

    const { user } = player

    const type = args[0]
    const avatarId = parseInt(args[1]) || -1
    const modifyType = args[2] || ''
    const value = parseInt(args[3]) || 0
    const avatar = player.avatars.find(av => av.avatarId === avatarId)

    switch (type) {
        case "add":
            if (isDocument(user.equipment) && avatarId >= 0) {
                await user.addAvatar(avatarId, user.equipment)
            } else {
                throw "Server error!"
            }
            break;
        case "exp":
            if (avatar !== undefined && isDocument(user.equipment) && value > 0) {
                await user.addAvatarExp(value, instance as Session, avatarId)
            } else {
                throw "Server error!"
            }
            break;
        case "modify":
            if (isDocument(user.equipment) && modifyType !== '' && value > 0) {
                let updatedAvatars = []
                if (avatarId == -1) {
                    for (let av of player.avatars) {
                        av.$set(modifyType, value)
                        updatedAvatars.push(av)
                        await av.save()
                    }
                }
                else if (avatar !== undefined) {
                    avatar.$set(modifyType, value)
                    updatedAvatars.push(avatar)
                    await avatar.save()
                }
                else
                    throw "Invalid Avatar in avatar modify command"
                if (session) {
                    session.send(Packet.encode(GetAvatarDataRsp, {
                        retcode: GetAvatarDataRsp_Retcode.SUCC,
                        avatarList: updatedAvatars
                    }, GetAvatarDataRsp_CmdId.CMD_ID))
                }
            } else {
                throw "Server error!"
            }
            break;
        default:
            throw "Bad command!"
    }

    await user.save()

    if (session) {
        await GetEquipmentDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetEquipmentDataReq_CmdId.CMD_ID))
        await GetAvatarDataReq(session, Packet.encodeFromRaw(Buffer.from(""), GetAvatarDataReq_CmdId.CMD_ID))
    }
}