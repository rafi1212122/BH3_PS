import net from "net"
import logger from "../../util/logger"
import { GetBulletinActivityMissionReq, GetBulletinActivityMissionRsp, GetBulletinActivityMissionRsp_CmdId, GetBulletinActivityMissionRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetBulletinActivityMissionReq) => {
    Packet.getInstance().serializeAndSend(socket, GetBulletinActivityMissionRsp_CmdId.CMD_ID, {
        retcode: GetBulletinActivityMissionRsp_Retcode['SUCC'],
        missionGroupList: Array.isArray(packet.activityIdList)&&packet.activityIdList.map((id)=>{
            return{
                activityId: id
            }
        })
    } as GetBulletinActivityMissionRsp)
}