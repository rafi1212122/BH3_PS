import Packet from "../tcp/Packet";
import Session from "../tcp/Session";
import Player from "../tcp/game/Player";
import { isDocument } from "@typegoose/typegoose";
import GetEquipmentDataReq from "../tcp/packets/GetEquipmentDataReq";
import GetAvatarDataReq from "../tcp/packets/GetAvatarDataReq";
import { GetAvatarDataReq_CmdId, GetEquipmentDataReq_CmdId } from "../../resources/proto/BengHuai";
import { BeAnyObject } from "@typegoose/typegoose/lib/types";
import avatarData from "../../resources/ExcelOutputAsset/AvatarData.json";
import weaponData from "../../resources/ExcelOutputAsset/WeaponData.json";
import stigmataData from "../../resources/ExcelOutputAsset/StigmataData.json";
import materialData from "../../resources/ExcelOutputAsset/MaterialData.json";

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
                for (let avatar of avatarData) {
                    if (avatar.avatarID >= 9000) continue;

                    for (let a of player?.avatars)
                        if (a.avatarId === avatar.avatarID)
                            continue;

                    await user.addAvatar(avatar.avatarID, user.equipment)
                }
            }
            else
                throw "Server error!"
            break;
        case "weapons":
            if (isDocument(user.equipment)) {
                for (let weapon of weaponData) {
                    await user.equipment.addWeapon(weapon.ID)
                }

                user.equipment.save()
            }
            else
                throw "Server error!"
            break;
        case "stigmata":
        case "stigs":
            if (isDocument(user.equipment)) {
                for (let stigmata of stigmataData) {
                    await user.equipment.addStigmata(stigmata.ID)
                }

                user.equipment.save()
            }
            else
                throw "Server error!"
            break;
        case "materials":
        case "matz":
            if (isDocument(user.equipment)) {
                for (let material of materialData) {
                    // TODO: Filter out unnecessary things like trial characters

                    await user.equipment.addMaterial(material.ID, material.quantityLimit)
                }

                user.equipment.save()
            }
            else
                throw "Server error!"
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
