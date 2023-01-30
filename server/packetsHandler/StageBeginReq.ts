import net from "net"
import { DropItem, StageBeginReq, StageBeginRsp, StageBeginRsp_CmdId, StageBeginRsp_Retcode } from "../../BengHuai"
import User from "../../mongodb/Model/User"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default async (socket: net.Socket, packet: StageBeginReq) => {
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        return Packet.getInstance().serializeAndSend(socket, StageBeginRsp_CmdId.CMD_ID, {
            retcode: StageBeginRsp_Retcode.FAIL
        } as StageBeginRsp)
    }
    Packet.getInstance().serializeAndSend(socket, StageBeginRsp_CmdId.CMD_ID, {
        retcode: StageBeginRsp_Retcode.SUCC,
        stageId: packet.stageId,
        progress: 0,
        signKey: stageKeys.find((val)=>val.stageId===packet.stageId)?.key,
        isCollectCheatData: false,
        dropItemList: [] as DropItem[]
    } as StageBeginRsp)

    if(packet.stageId===10101){
        await User.updateOne({
            uid: user.uid
        },{ 
            $set: {
                isFirstLogin: false
            }
        })
    }
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
    {
        stageId: 146074,
        key: '61793084'
    },
]