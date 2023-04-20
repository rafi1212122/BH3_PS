import net from "net"
import { DropItem, StageBeginReq, StageBeginRsp, StageBeginRsp_CmdId, StageBeginRsp_Retcode } from "../../BengHuai"
import User from "../../mongodb/Model/User"
import GameServer from "../GameServer"
import Packet from "../Packet"
import cuid from "cuid"

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
        signKey: cuid(),
        isCollectCheatData: false,
        dropItemList: [] as DropItem[],
        tag: 0,
        stageTransactionStr: `${user.uid}-${packet.stageId}`
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
    {
        stageId: 13910,
        key: '1971771435'
    },
]