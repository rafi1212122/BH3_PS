import { GetBulletinRsp, GetBulletinRsp_CmdId, GetBulletinRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetBulletinRsp, {
        retcode: GetBulletinRsp_Retcode.SUCC,
        bulletinList: [
            {
                "id": 2023042057,
                "type": 2,
                "weight": 0,
                "titleButton": "",
                "title": "6.5主线第三阶段投影",
                "bannerPath": "event/Immediately/6.5_zhuxianTY3",
                "eventDateStr": "",
                "content": "94|36",
                "mark": 0,
                "beginTime": 0,
                "endTime": 0,
                "updateTime": 0,
                "showConfigId": 0,
                "clientReqType": 3
            },
            {
                "id": 2023050457,
                "type": 2,
                "weight": 0,
                "titleButton": "",
                "title": "6.5芯核空间投影3",
                "bannerPath": "event/Immediately/6.5_xinheTY3",
                "eventDateStr": "",
                "content": "142|0",
                "mark": 0,
                "beginTime": 0,
                "endTime": 0,
                "updateTime": 0,
                "showConfigId": 0,
                "clientReqType": 3
            }
        ],
        isAll: true
    }, GetBulletinRsp_CmdId.CMD_ID)

    session.send(rsp)
}