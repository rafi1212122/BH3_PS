import { GetMainDataReq_DataType, GetMainDataRsp, GetMainDataRsp_CmdId, PlayerLevelUpNotify, PlayerLevelUpNotify_CmdId } from "../../resources/proto/BengHuai";
import Packet from "../tcp/Packet";
import Session from "../tcp/Session";
import Player from "../tcp/game/Player";

export default async (instance: Session | Player, ...args: string[]) => {
    let session: Session | undefined
    let player: Player

    if(instance instanceof Session) {
        session = instance
        player = instance.player
    }else { player = instance }

    const { user } = player
    const level = parseInt(args[0])

    if(!level || level > 88) throw "Invalid Level"

    user.level = level
    await user.save()

    if(session) {
        const mainDataPacket = Packet.encode(GetMainDataRsp, {
            level: user.level,
            exp: user.exp,
            typeList: [GetMainDataReq_DataType.LEVEL]
        }, GetMainDataRsp_CmdId.CMD_ID)

        const levelUpNotifyPacket = Packet.encode(PlayerLevelUpNotify, {
            newLevel: user.level,
            oldLevel: user.level - 1
        }, PlayerLevelUpNotify_CmdId.CMD_ID)

        session.send(mainDataPacket, levelUpNotifyPacket)
    }
}