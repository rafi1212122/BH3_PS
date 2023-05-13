import { Request, Response } from "express";
import TextMap from "../../../../utils/excel/TextMap";
import HttpServer from "../../HttpServer";
import MaterialData from "../../../../utils/excel/MaterialData";

export default function handler(req: Request, res: Response) {
    const materials = MaterialData.all()
    const cache = HttpServer.getInstance().objCache.get("gm_materials")
    const data = cache || HttpServer.getInstance().objCache.set("gm_materials", materials.filter(material => TextMap.fromHash(material.displayTitle.hash)?.Text).map(material => {
        const displayTitle = TextMap.fromHash(material.displayTitle.hash)?.Text
        const displayDescription = TextMap.fromHash(material.displayDescription.hash)?.Text

        return {
            id: material.ID,
            title: displayTitle,
            desc: displayDescription
        }
    })).get("gm_materials")
    
	return res.json(data);
}