import net from "net"
import { DormDataType, GetDormDataReq, GetDormDataRsp, GetDormDataRsp_CmdId, GetDormDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetDormDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetDormDataRsp_CmdId.CMD_ID, {
        retcode: GetDormDataRsp_Retcode.SUCC,
        dataType: DormDataType.DORM_DATA_ALL,
        levelUpHouseId: 0,
        levelUpEndTime: 0,
        levelUpEndHouseId: 0,
        showHouse: 0,
        showRoom: 0,
        visitAvatar: 0,
        isAllowVisit: true,
        lastTakeDormDailyStaminaTime: 0
    } as GetDormDataRsp)
}