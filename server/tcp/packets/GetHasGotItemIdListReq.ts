import { GetHasGotItemIdListRsp, GetHasGotItemIdListRsp_CmdId, GetHasGotItemIdListRsp_Retcode } from "../../../resources/proto/BengHuai";
import EntryThemeItemData from "../../../utils/excel/EntryThemeItemData";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const { stigmatas, weapons, materials, avatars } = session.player

    const rsp = Packet.encode(GetHasGotItemIdListRsp, {
        retcode: GetHasGotItemIdListRsp_Retcode.SUCC,
        itemIdList: [...stigmatas.map(({ id }) => id), ...weapons.map(({ id }) => id), ...materials.map(({ id }) => id), ...avatars.map(({ dressList }) => dressList).flat(), EntryThemeItemData.all().map(i => i.ThemeItemID)] as number[]
    }, GetHasGotItemIdListRsp_CmdId.CMD_ID)

    session.send(rsp)
}