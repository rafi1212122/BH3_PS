import net from "net"
import { GetRegionUidRangeReq, GetRegionUidRangeRsp, GetRegionUidRangeRsp_CmdId, GetRegionUidRangeRsp_Retcode } from "../../BengHuai"
import config from "../../config"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRegionUidRangeReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRegionUidRangeRsp_CmdId.CMD_ID, {
        retcode: GetRegionUidRangeRsp_Retcode.SUCC,
        localRegionName: config.regionName,
        regionUidRangeList: [
            {
                regionName: config.regionName,
                startUid: 10000000,
                endUid: 99999999
            }
        ]
    } as GetRegionUidRangeRsp)
}