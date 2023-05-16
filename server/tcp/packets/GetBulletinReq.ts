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
                "bannerPath": "event/Immediately/6.5_xinheTY4",
                "eventDateStr": "",
                "content": "142|0",
                "mark": 0,
                "beginTime": 0,
                "endTime": 0,
                "updateTime": 0,
                "showConfigId": 0,
                "clientReqType": 3
            },
            {
                "id": 2023042058,
                "type": 2,
                "weight": 0,
                "titleButton": "",
                "title": "6.5\u5d29\u8c46\u4eba\u590d\u523b\u6295\u5f71",
                "bannerPath": "event/Immediately/6.5_bdrTY",
                "eventDateStr": "",
                "content": "81|2200",
                "mark": 0,
                "beginTime": 0,
                "endTime": 0,
                "updateTime": 0,
                "showConfigId": 0,
                "clientReqType": 3
            },
            {
                "id": 2023050855,
                "type": 2,
                "title": "6.5\u7248\u672c\u6ee1\u610f\u5ea6\u95ee\u5377TY",
                "bannerPath": "event/Immediately/const_ques",
                "eventDateStr": "",
                "content": "1001|https://webstatic.hoyoverse.com/common/event/survey-user-v2/index.html",
                "mark": 0,
                "showConfigId": 0,
                "clientReqType": 3
            }
        ],
        isAll: true
    }, GetBulletinRsp_CmdId.CMD_ID)

    session.send(rsp)
}