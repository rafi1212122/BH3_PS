import net from "net"
import logger from "../../util/logger"
import { StageBeginReq, StageBeginRsp, StageBeginRsp_CmdId, StageBeginRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: StageBeginReq) => {
    Packet.getInstance().serializeAndSend(socket, StageBeginRsp_CmdId.CMD_ID, {
        retcode: StageBeginRsp_Retcode.SUCC,
        stageId: packet.stageId,
        progress: 0,
        signKey: stageKeys.find((val)=>val.stageId===packet.stageId)?.key,
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

const stageKeys = [
    {
        stageId: 10101,
        key: '1824058972'
    },
    {
        stageId: 10102,
        key: '574083224'
    },
    {
        stageId: 10105,
        key: '15744598'
    },
]