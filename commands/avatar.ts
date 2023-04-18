import { Socket } from "net";
import GameServer from "../server/GameServer";
import Avatar, { Avatar as AvatarSchema, assignAvatar, removeAvatar } from "../mongodb/Model/Avatar";
import { InsertOneResult } from "mongodb";
import GetAvatarDataReq from "../server/packetsHandler/GetAvatarDataReq";

export default async (socket: Socket, args: string[]) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const avatars = session?.avatars

    if(!avatars||!session.user) return
    if(isNaN(parseInt(args[2]))) return
    
    switch (args[1]) {
        default:
            try {
                await assignAvatar(parseInt(args[2]), session.user.uid)
            } catch (error) {
                console.error(error)
            }
            break
    }

    session.avatars = await Avatar.find({
        userUid: session.user.uid
    }).toArray()

    GetAvatarDataReq(socket, { avatarIdList: [0] })
}
