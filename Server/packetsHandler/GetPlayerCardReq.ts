import net from "net"
import logger from "../../util/logger"
import { GetPlayerCardReq, GetPlayerCardRsp, GetPlayerCardRsp_Retcode, Medal, PlayerCardMsg, PlayerCardType } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetPlayerCardReq, cmdId: number) => {
    const reply = Packet.getInstance().serialize(CmdId['GetPlayerCardRsp'], {
        retcode: GetPlayerCardRsp_Retcode.SUCC,
        type: PlayerCardType.CARD_ALL,
        avatarIdList: [] as number[],
        msgConfig: 0,
        msgData: {
            msgList: [] as PlayerCardMsg[],
        },
        lastReadMsgIndex: 0,
        mpLikeNum: 300,
        islandLikeNum: 1000,
        elfIdList: [] as number[],
        campaignLikeNum: 10000,
        medalIdList: [] as number[],
        medalList: [] as Medal[]
    } as GetPlayerCardRsp)
    socket.write(reply, (err) => {
        if(err) return console.log('socket.write error', err)
        logger(`${CmdId[cmdId+1]} sent!`, 'warn', 'TCP')
    })
}