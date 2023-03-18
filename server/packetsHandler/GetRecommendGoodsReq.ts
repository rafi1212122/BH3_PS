import net from "net"
import { GetRecommendGoodsReq, GetRecommendGoodsRsp, GetRecommendGoodsRsp_CmdId, GetRecommendGoodsRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRecommendGoodsReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRecommendGoodsRsp_CmdId.CMD_ID, {
        retcode: GetRecommendGoodsRsp_Retcode.SUCC,
    } as GetRecommendGoodsRsp)
}