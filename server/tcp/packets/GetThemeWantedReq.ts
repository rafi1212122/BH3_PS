import { GetThemeWantedRsp, GetThemeWantedRsp_CmdId, GetThemeWantedRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetThemeWantedRsp, {
        retcode: GetThemeWantedRsp_Retcode.SUCC,
        themeWantedActivity: {
            scheduleId: 1,
            activityId: 11104,
            openStageGroupIdList: [
                13,
                14,
                15,
                16
            ],
            stageGroupInfoList: [
            {
                stageGroupId: 13,
                progress: 7,
                unlockMpProgressList: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            },
            {
                stageGroupId: 14,
                progress: 7,
                unlockMpProgressList: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            },
            {
                stageGroupId: 15,
                progress: 8,
                unlockMpProgressList: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            },
            {
                stageGroupId: 16,
                progress: 7,
                unlockMpProgressList: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ]
            }
            ],
            endTime: 2068660799
        }
    }, GetThemeWantedRsp_CmdId.CMD_ID)

    session.send(rsp)
}