import { GetWarshipItemDataRsp, GetWarshipItemDataRsp_CmdId, GetWarshipItemDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import EntryThemeItemData from "../../../utils/excel/EntryThemeItemData";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWarshipItemDataRsp, {
        retcode: GetWarshipItemDataRsp_Retcode.SUCC,
        isAll: true,
        warshipItemIdList: EntryThemeItemData.all().map(i => i.ThemeItemID)
    }, GetWarshipItemDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}