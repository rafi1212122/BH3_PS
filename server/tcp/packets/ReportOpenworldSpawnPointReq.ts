import { ReportOpenworldSpawnPointReq, ReportOpenworldSpawnPointRsp, ReportOpenworldSpawnPointRsp_CmdId, ReportOpenworldSpawnPointRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { user } = session.player
    const data = packet.data as ReportOpenworldSpawnPointReq

    if(data.mapId && data.pointInfo) {
        await user.setOWSpawn(data.mapId, data.pointInfo).save()
    }

    const rsp = Packet.encode(ReportOpenworldSpawnPointRsp, {
        retcode: ReportOpenworldSpawnPointRsp_Retcode.SUCC,
        mapId: data.mapId,
        pointInfo: data.pointInfo
    }, ReportOpenworldSpawnPointRsp_CmdId.CMD_ID)

    session.send(rsp)
}