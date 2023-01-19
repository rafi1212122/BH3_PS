import net from "net"
import logger from "../../util/logger"
import { GetChapterCompensationInfoReq, GetChapterCompensationInfoRsp, GetChapterCompensationInfoRsp_CmdId, GetChapterCompensationInfoRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetChapterCompensationInfoReq) => {
    Packet.getInstance().serializeAndSend(socket, GetChapterCompensationInfoRsp_CmdId.CMD_ID, {
        retcode: GetChapterCompensationInfoRsp_Retcode.SUCC,
        isAll: true,
        compensateList: []
    } as GetChapterCompensationInfoRsp)
}