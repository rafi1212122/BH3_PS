import { Socket } from "net";
import StageBeginReq from "../server/packetsHandler/StageBeginReq";

export default async (socket: Socket, args: string[]) => {
    if(isNaN(parseInt(args[1]))) return
    StageBeginReq(socket, {
        stageId: parseInt(args[1]),
    } as any)
}