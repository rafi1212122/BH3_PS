import dayjs from "dayjs";
import { GetRegionUidRangeRsp, GetRegionUidRangeRsp_CmdId, GetRegionUidRangeRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";
import Config from "../../../utils/Config";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetRegionUidRangeRsp, {
        retcode: GetRegionUidRangeRsp_Retcode.SUCC,
        localRegionName: Config.GAMESERVER.REGION_NAME,
        regionUidRangeList: [
            {
                regionName: Config.GAMESERVER.REGION_NAME,
                startUid: 10000000,
                endUid: 50000000
            }
        ]
    }, GetRegionUidRangeRsp_CmdId.CMD_ID)

    session.send(rsp)
}