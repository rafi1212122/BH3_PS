import net from "net"
import { MpGetTeamReq, MpGetTeamRsp, MpGetTeamRsp_CmdId, MpGetTeamRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: MpGetTeamReq) => {
    Packet.getInstance().serializeAndSend(socket, MpGetTeamRsp_CmdId.CMD_ID, {
        retcode: MpGetTeamRsp_Retcode.NOT_IN_TEAM,
    } as MpGetTeamRsp)
}