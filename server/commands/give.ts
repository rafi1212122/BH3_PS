import Packet from "../tcp/Packet";
import Session from "../tcp/Session";
import Player from "../tcp/game/Player";
import { isDocument } from "@typegoose/typegoose";
import GetEquipmentDataReq from "../tcp/packets/GetEquipmentDataReq";
import GetAvatarDataReq from "../tcp/packets/GetAvatarDataReq";
import { GetAvatarDataReq_CmdId, GetEquipmentDataReq_CmdId } from "../../resources/proto/BengHuai";
import MaterialData from "../../utils/excel/MaterialData";
import StigmataData from "../../utils/excel/StigmataData";
import AvatarData from "../../utils/excel/AvatarData";
import WeaponData from "../../utils/excel/WeaponData";
import DressData from "../../utils/excel/DressData";

export default async (instance: Session | Player, ...args: string[]) => {
    let session: Session | undefined
    let player: Player

    if (instance instanceof Session) {
        session = instance
        player = instance.player
    } else { player = instance }

    const { user } = player

    const type = args[0]

    switch (type) {
        case "avatars":
        case "characters":
        case "chars":
            if (isDocument(user.equipment)) {
                for (let avatar of AvatarData.all()) {
                    if (avatar.avatarID >= 9000) continue;

                    if (player.avatars.find(av => av.avatarId === avatar.avatarID)) continue

                    await user.addAvatar(avatar.avatarID, user.equipment)
                }
            }
            else
                throw "Server error!"
            break;
        case "weapons":
            if (isDocument(user.equipment)) {
                for (let weapon of WeaponData.all()) {
                    await user.equipment.addWeapon(weapon.ID)
                }

                await user.equipment.save()
            }
            else
                throw "Server error!"
            break;
        case "stigmata":
        case "stigs":
            if (isDocument(user.equipment)) {
                for (let stigmata of StigmataData.all()) {
                    await user.equipment.addStigmata(stigmata.ID)
                }

                await user.equipment.save()
            }
            else
                throw "Server error!"
            break;
        case "materials":
        case "matz":
            if (isDocument(user.equipment)) {
                for (let material of MaterialData.all()) {
                    // TODO: Filter out unnecessary things like trial characters

                    await user.equipment.addMaterial(material.ID, material.quantityLimit)
                }

                await user.equipment.save()
            }
            else
                throw "Server error!"
            break;
        case "dress":
            for (let dress of DressData.all()) {
                for (let avatarId of dress.avatarIDList) {
                    const avatar = player.avatars.find(av => av.avatarId === avatarId)
                    if (avatar) {
                        const dressId = avatar.dressList?.find(id => id === dress.dressID)
                        if (dressId === undefined) {
                            avatar.dressList?.push(dress.dressID)
                        }
                        await avatar.save()
                    }
                }
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
