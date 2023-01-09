import net from "net"
import logger from "../../util/logger"
import { StageBeginReq, StageBeginRsp, StageBeginRsp_CmdId, StageBeginRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: StageBeginReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, StageBeginRsp_CmdId.CMD_ID, {
        retcode: StageBeginRsp_Retcode.SUCC,
        stageId: packet.stageId,
        progress: 0,
        signKey: '1824058972',
        isCollectCheatData: false,
        dropItemList: [
            {
                itemId: 100,
                level: 0,
                num: 12000,
                rarity: 1
            },
            {
                itemId: 3000,
                level: 0,
                num: 1,
                rarity: 1
            },
            {
                itemId: 100,
                level: 0,
                num: 4000,
                rarity: 1
            },
            {
                itemId: 1001,
                level: 0,
                num: 3,
                rarity: 1
            }
        ]
    } as StageBeginRsp)
}