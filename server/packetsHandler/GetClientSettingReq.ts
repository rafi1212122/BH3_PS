import net from "net"
import { GetClientSettingReq, GetClientSettingRsp, GetClientSettingRsp_CmdId, GetClientSettingRsp_Retcode, MasterPupilType } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetClientSettingReq) => {
    Packet.getInstance().serializeAndSend(socket, GetClientSettingRsp_CmdId.CMD_ID, {
        retcode: GetClientSettingRsp_Retcode.SUCC,
        clientSettingType: packet.clientSettingType||1,
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
                type: MasterPupilType.MASTER_PUPIL_MASTER_TYPE,
                isOpen: false
            },
            {
                type: MasterPupilType.MASTER_PUPIL_PUPIL_TYPE,
                isOpen: false
            }
        ]
    } as GetClientSettingRsp)
}