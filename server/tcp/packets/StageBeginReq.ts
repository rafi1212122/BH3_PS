import { StageBeginReq, StageBeginRsp, StageBeginRsp_CmdId, StageBeginRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const data  = packet.data as StageBeginReq

    const rsp = Packet.encode(StageBeginRsp, {
        retcode: StageBeginRsp_Retcode.SUCC,
        stageId: data.stageId,
        progress: 0,
        dropItemList: [
            {
                itemId: 100,
                level: 0,
                num: 12000,
                rarity: 1
            },
            {
                itemId: 3000,
                level: 0,
                num: 1,
                rarity: 1
            },
            {
                itemId: 100,
                level: 0,
                num: 4000,
                rarity: 1
            },
            {
                itemId: 1001,
                level: 0,
                num: 3,
                rarity: 1
            }
        ],
        isCollectCheatData: false
    }, StageBeginRsp_CmdId.CMD_ID)

    session.send(rsp)
}