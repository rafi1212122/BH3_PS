import net from "net"
import { ClientMailType, GetClientMailDataReq, GetClientMailDataRsp, GetClientMailDataRsp_CmdId, GetClientMailDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClientMailDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetClientMailDataRsp_CmdId.CMD_ID, {
        retcode: GetClientMailDataRsp_Retcode.SUCC,
        isEnd: false,
        mailList: [
            {
                key: {
                    type: ClientMailType.CLIENT_MAIL_MAIL,
                    id: 207
                },
                title: "Hadiah Survei Tingkat Kepuasan Versi",
                content: "Terima kasih atas dukungannya! Ini hadiah untuk Kapten ya~",
                sender: "Ai-chan",
                time: 1673151589,
                attachment: {
                    hcoin: 200,
                    scoin: 0,
                    stamina: 0,
                    exp: 0,
                    mcoin: 0
                },
                isAttachmentGot: false,
                expireTime: 1673727589,
                templateId: 0,
                isRead: false,
                mailStyle: 0,
                imgPath: ""
            }
        ]
    } as GetClientMailDataRsp)
}