import { GetBulletinRsp, GetBulletinRsp_CmdId, GetBulletinRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetBulletinRsp, {
        retcode: GetBulletinRsp_Retcode.SUCC,
        bulletinList: [
            {
                "id": 2023051555,
                "type": 2,
                "title": "6.6\u4e3b\u7ebfTY1",
                "bannerPath": "event/Immediately/6.6_zhuxianTY1",
                "eventDateStr": "",
                "content": "94|37",
                "mark": 0,
                "showConfigId": 0,
                "clientReqType": 3
            },
            {
                "id": 2023051558,
                "type": 2,
                "title": "6.6\u7248\u672c\u798f\u5229\u5546\u5e97TY",
                "bannerPath": "event/Immediately/6.6_fuliTY",
                "eventDateStr": "",
                "content": "64|5551",
                "mark": 0,
                "showConfigId": 0,
                "clientReqType": 3
            }
        ],
        isAll: true
    }, GetBulletinRsp_CmdId.CMD_ID)

    session.send(rsp)
}