import { GetClientSettingRsp, GetClientSettingRsp_CmdId, GetClientSettingRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetClientSettingRsp, {
        retcode: GetClientSettingRsp_Retcode.SUCC,
        clientSettingType: 1,
        isWeeklyGuideSwitchOn: true,
        snsShowPriviledgeList: [
          {
            snsShowType: 1,
            snsShowPriviledgeState: 1
          },
          {
            snsShowType: 2,
            snsShowPriviledgeState: 1
          },
          {
            snsShowType: 3,
            snsShowPriviledgeState: 1
          },
          {
            snsShowType: 4,
            snsShowPriviledgeState: 1
          }
        ],
        avatarArtifactSwitchList: [],
        masterPupilTagSwitchList: [
          {
            type: 1,
            isOpen: false
          },
          {
            type: 2,
            isOpen: false
          }
        ]
    }, GetClientSettingRsp_CmdId.CMD_ID)

    session.send(rsp)
}