import net from "net"
import logger from "../../util/logger"
import { GetAvatarTeamDataReq, GetAvatarTeamDataRsp, GetAvatarTeamDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAvatarTeamDataReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetAvatarTeamDataRsp'], {
        retcode: GetAvatarTeamDataRsp_Retcode.SUCC,
        avatarTeamList: [
            {
                stageType: 1,
                avatarIdList: [ 101 ]
            }
        ],
        customAvatarTeamList: []
    } as GetAvatarTeamDataRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}