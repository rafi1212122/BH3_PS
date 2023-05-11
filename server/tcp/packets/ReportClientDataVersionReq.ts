import { ReportClientDataVersionReq, ReportClientDataVersionRsp, ReportClientDataVersionRsp_CmdId } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as ReportClientDataVersionReq

    const rsp = Packet.encode(ReportClientDataVersionRsp, {
        serverVersion: data.version
    }, ReportClientDataVersionRsp_CmdId.CMD_ID)

    session.send(rsp)
}