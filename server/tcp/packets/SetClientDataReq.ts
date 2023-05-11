import { SetClientDataReq, SetClientDataRsp, SetClientDataRsp_CmdId, SetClientDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data = packet.data as SetClientDataReq

    const rsp = Packet.encode(SetClientDataRsp, {
        retcode: SetClientDataRsp_Retcode.SUCC,
        id: data.clientData?.id,
        type: data.clientData?.type
    }, SetClientDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}