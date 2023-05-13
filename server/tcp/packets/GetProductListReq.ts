import { GetProductListReq, GetProductListRsp, GetProductListRsp_CmdId, GetProductListRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetProductListRsp, {
        retcode: GetProductListRsp_Retcode.SUCC,
        nextLimitProductRefreshTime: 1924963200,
        productList: []
    }, GetProductListRsp_CmdId.CMD_ID)

    session.send(rsp)
}