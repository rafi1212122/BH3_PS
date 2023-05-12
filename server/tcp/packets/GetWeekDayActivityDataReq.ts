import dayjs from "dayjs";
import { GetWeekDayActivityDataRsp, GetWeekDayActivityDataRsp_CmdId, GetWeekDayActivityDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWeekDayActivityDataRsp, {
        retcode: GetWeekDayActivityDataRsp_Retcode.SUCC,
        "activityList": [
          {
            "activityId": 1002,
            "stageIdList": [
              101202,
              101203,
              101204,
              101205
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1861991999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1420056000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 10002
          },
          {
            "activityId": 1400,
            "stageIdList": [
              45455
            ],
            "enterTimes": 0,
            "beginTime": 1683489600,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1880294399,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1420056000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 14000
          },
          {
            "activityId": 1501,
            "stageIdList": [
              45001,
              45013,
              45033
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1880308799,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1420056000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 15001
          },
          {
            "activityId": 1551,
            "stageIdList": [
              45444
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1880308799,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1567368000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 15501
          },
          {
            "activityId": 1552,
            "stageIdList": [
              45443
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1880308799,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1567368000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 15502
          },
          {
            "activityId": 34214,
            "stageIdList": [
              143124,
              143125
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37030
          },
          {
            "activityId": 36022,
            "stageIdList": [
              370031,
              370032,
              370033,
              370034,
              370035,
              370036
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1684094399,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 1684094400,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1683511200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 60063
          },
          {
            "activityId": 36141,
            "stageIdList": [
              371441,
              371442,
              371443,
              371444,
              371445,
              371446
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1684094399,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 1684094400,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1683489600,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 50187
          },
          {
            "activityId": 36142,
            "stageIdList": [
              371447,
              371448,
              371449,
              371450,
              371451,
              371452
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1684094399,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 1684094400,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1683489600,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 50188
          },
          {
            "activityId": 36143,
            "stageIdList": [
              371453,
              371454,
              371455,
              371456,
              371457,
              371458
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1684094399,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 1684094400,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1683489600,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 50189
          },
          {
            "activityId": 37013,
            "stageIdList": [
              142079
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 3396455999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1615946400,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37584
          },
          {
            "activityId": 37044,
            "stageIdList": [
              143231
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 3396455999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1615946400,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37585
          },
          {
            "activityId": 37100,
            "stageIdList": [
              170000
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37031
          },
          {
            "activityId": 37101,
            "stageIdList": [
              170001
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37032
          },
          {
            "activityId": 37102,
            "stageIdList": [
              170002
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37033
          },
          {
            "activityId": 37103,
            "stageIdList": [
              170003
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37034
          },
          {
            "activityId": 37104,
            "stageIdList": [
              170004
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37035
          },
          {
            "activityId": 37105,
            "stageIdList": [
              170005
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37036
          },
          {
            "activityId": 37106,
            "stageIdList": [
              170006
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37037
          },
          {
            "activityId": 37107,
            "stageIdList": [
              170007
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37038
          },
          {
            "activityId": 37108,
            "stageIdList": [
              170008
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37039
          },
          {
            "activityId": 37109,
            "stageIdList": [
              170009
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37040
          },
          {
            "activityId": 37110,
            "stageIdList": [
              170010
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37041
          },
          {
            "activityId": 37111,
            "stageIdList": [
              170011
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37042
          },
          {
            "activityId": 37112,
            "stageIdList": [
              170012
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37043
          },
          {
            "activityId": 37113,
            "stageIdList": [
              170013
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37044
          },
          {
            "activityId": 37114,
            "stageIdList": [
              170014
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37045
          },
          {
            "activityId": 37115,
            "stageIdList": [
              170015
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37046
          },
          {
            "activityId": 37116,
            "stageIdList": [
              170016
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37047
          },
          {
            "activityId": 37117,
            "stageIdList": [
              170017
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37048
          },
          {
            "activityId": 37118,
            "stageIdList": [
              170018
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37049
          },
          {
            "activityId": 37119,
            "stageIdList": [
              170019
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1562119200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37050
          },
          {
            "activityId": 37131,
            "stageIdList": [
              143358,
              143359,
              143360
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 3396455999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1615946400,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37586
          },
          {
            "activityId": 37139,
            "stageIdList": [
              143362,
              143363
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 3396455999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1615946400,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37587
          },
          {
            "activityId": 37149,
            "stageIdList": [
              144719,
              144720
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 3396455999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1615946400,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37588
          },
          {
            "activityId": 37207,
            "stageIdList": [
              145613
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1767211199,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1588795200,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37302
          },
          {
            "activityId": 37227,
            "stageIdList": [
              145626,
              145628,
              145630,
              10300100,
              10300101,
              10300102,
              10300103,
              10300104,
              10300105,
              10300106,
              10300107,
              10300108
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1561946400,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37381
          },
          {
            "activityId": 37232,
            "stageIdList": [
              145555
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4088001599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1600660800,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37421
          },
          {
            "activityId": 37237,
            "stageIdList": [
              145629
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4095806399,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1602820800,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37450
          },
          {
            "activityId": 37238,
            "stageIdList": [
              145633
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4097015999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1603425600,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37451
          },
          {
            "activityId": 37244,
            "stageIdList": [
              148080
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4087943999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1606968000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37457
          },
          {
            "activityId": 37245,
            "stageIdList": [
              148081
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 4087943999,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1606968000,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37458
          },
          {
            "activityId": 37254,
            "stageIdList": [
              145642
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1684353599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1680724800,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37546
          },
          {
            "activityId": 37304,
            "stageIdList": [
              170199
            ],
            "enterTimes": 0,
            "beginTime": 1683576000,
            "endTime": dayjs().add(1, 'day').startOf('day').add(4, 'hour').unix(),
            "activityEndTime": 1877025599,
            "exchangeTimes": 0,
            "mpRaidNextRefreshTime": 0,
            "mpRaidResetTimes": 0,
            "mpMemberTodayEnterTimes": 0,
            "challengeRewardGrantedList": [],
            "activityBeginTime": 1622512800,
            "forceOpenTime": 0,
            "mpRaidScoreSum": 0,
            "isGetMpRaidSpecialReward": false,
            "raidScoreRewardList": [],
            "scheduleId": 37671
          }
        ],
        "isWholeData": true,
        "seriesList": [
          {
            "seriesId": 1001,
            "availableSweepNum": 1
          },
          {
            "seriesId": 1400,
            "availableSweepNum": 3
          },
          {
            "seriesId": 1501,
            "availableSweepNum": 1
          },
          {
            "seriesId": 1502,
            "availableSweepNum": 1
          },
          {
            "seriesId": 1503,
            "availableSweepNum": 1
          },
          {
            "seriesId": 3371,
            "availableSweepNum": 0
          },
          {
            "seriesId": 3383,
            "availableSweepNum": 0
          },
          {
            "seriesId": 3399,
            "availableSweepNum": 0
          },
          {
            "seriesId": 3614,
            "availableSweepNum": 0
          },
          {
            "seriesId": 3655,
            "availableSweepNum": 0
          },
          {
            "seriesId": 3656,
            "availableSweepNum": 0
          },
          {
            "seriesId": 3657,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32032,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32033,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32034,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32035,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32036,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32037,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32038,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32039,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32040,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32041,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32042,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32043,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32044,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32045,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32046,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32047,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32048,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32049,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32050,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32051,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32052,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32056,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32057,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32083,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32087,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32090,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32121,
            "availableSweepNum": 0
          },
          {
            "seriesId": 32140,
            "availableSweepNum": 0
          }
        ]
    }, GetWeekDayActivityDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}