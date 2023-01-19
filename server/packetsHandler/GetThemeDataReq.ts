import net from "net"
import { GetThemeDataReq, GetThemeDataRsp, GetThemeDataRsp_CmdId, GetThemeDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetThemeDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetThemeDataRsp_CmdId.CMD_ID, {
        retcode: GetThemeDataRsp_Retcode.SUCC,
        themeList: [
            {
                themeId: 400,
                beginTime: 1583373600,
                endTime: 2080843200
            },
            {
                themeId: 401,
                beginTime: 1583373600,
                endTime: 2080843200
            },
            {
                themeId: 402,
                beginTime: 1583373600,
                endTime: 2080843200
            },
            {
                themeId: 1875,
                beginTime: 1673208000,
                endTime: 1673812799
            }
        ]
    } as GetThemeDataRsp)
}