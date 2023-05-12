import { Request, Response } from "express";
import AvatarData from "../../../../utils/excel/AvatarData";
import TextMap from "../../../../utils/excel/TextMap";
import HttpServer from "../../HttpServer";

export default function handler(req: Request, res: Response) {
    const avatars = AvatarData.all()
    const cache = HttpServer.getInstance().objCache.get("gm_avatars")
    const data = cache || HttpServer.getInstance().objCache.set("gm_avatars", avatars.filter(avatar => {
        const fullName = TextMap.fromHash(avatar.fullName.hash)?.Text
        const firstName = TextMap.fromHash(avatar.firstName.hash)?.Text
        
        return fullName && firstName
    }).map(avatar => {
        const fullName = TextMap.fromHash(avatar.fullName.hash)?.Text
        const firstName = TextMap.fromHash(avatar.firstName.hash)?.Text
        const lastName = TextMap.fromHash(avatar.lastName.hash)?.Text

        return {
            id: avatar.avatarID,
            battlesuit: fullName,
            name: `${firstName}${lastName ? ` ${lastName}` : ""}`
        }
    })).get("gm_avatars")
    
	return res.json(data);
}