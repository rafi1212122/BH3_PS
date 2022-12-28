import net from "net"
import { GetMainDataReq, GetMainDataRsp, GetMainDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import GameServer from "../GameServer"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetMainDataReq) => {
    let reply;
    const session = GameServer.getInstance().sessions.get(`${socket.remoteAddress}:${socket.remotePort}`)
    const user = session?.user
    if(!user){
        reply = Packet.getInstance().serialize(CmdId['PlayerLoginRsp'], {
            retcode: GetMainDataRsp_Retcode['FAIL'],
        } as GetMainDataRsp)
        return socket.write(reply)
    }
    reply = Packet.getInstance().serialize(CmdId['GetMainDataRsp'], {
        retcode: GetMainDataRsp_Retcode.SUCC,
        nickname: user.name,
        level: 1,
        exp: 0,
        hcoin: 600,
        scoin: 1000,
        stamina: 200,
        antiAddict: {},
        chatworldActivityInfo: {
            isHasNpcRedEnvelope: true,
        },
        warshipAvatar: {
            warshipFirstAvatarId: 711
        },
        onMedal: {}
    } as GetMainDataRsp)
    socket.write(reply)
}