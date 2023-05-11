import { SyncTimeReq, SyncTimeRsp, SyncTimeRsp_CmdId, SyncTimeRsp_Retcode } from "../../../resources/proto/BengHuai";
import { unixInSeconds } from "../../../utils";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as SyncTimeReq

    const rsp = Packet.encode(SyncTimeRsp, {
        retcode: SyncTimeRsp_Retcode.SUCC,
        seq: data.seq,
        curTime: unixInSeconds
    }, SyncTimeRsp_CmdId.CMD_ID)

    session.send(rsp)
}