import net from "net"
import { GetDormVoteDataReq, GetDormVoteDataRsp, GetDormVoteDataRsp_CmdId, GetDormVoteDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetDormVoteDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetDormVoteDataRsp_CmdId.CMD_ID, {
        retcode: GetDormVoteDataRsp_Retcode.SUCC,
    } as GetDormVoteDataRsp)
}