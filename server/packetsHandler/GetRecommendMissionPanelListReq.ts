import net from "net"
import { GetRecommendMissionPanelListReq, GetRecommendMissionPanelListRsp, GetRecommendMissionPanelListRsp_CmdId, GetRecommendMissionPanelListRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetRecommendMissionPanelListReq) => {
    Packet.getInstance().serializeAndSend(socket, GetRecommendMissionPanelListRsp_CmdId.CMD_ID, {
        retcode: GetRecommendMissionPanelListRsp_Retcode.SUCC,
        recommendMissionPanelList: [
            {
                panelId: 1,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 2,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 3,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 5,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 6,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 7,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 10,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 11,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 12,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 13,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 17,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 18,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 19,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 20,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 21,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 22,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 23,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 24,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 25,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 32,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 33,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 65,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 66,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 67,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 68,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 69,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 70,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 71,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 72,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 73,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 74,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 87,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 100,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 101,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 102,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 105,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 106,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 115,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 116,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 125,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 129,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 134,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 146,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 149,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 154,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 205,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 206,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 305,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 306,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 309,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 409,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1037,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1038,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1039,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1040,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1041,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1042,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1043,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1044,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1045,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1046,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1047,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1048,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1049,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1050,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1051,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1052,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1053,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1054,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1055,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1056,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1057,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1058,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1059,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1060,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1061,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1062,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1063,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1064,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1065,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1066,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1067,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1068,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1069,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1070,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1071,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1072,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1145,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1146,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1147,
                isPanelShow: true,
                missionBeginTime: 1678010400
            },
            {
                panelId: 1148,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1149,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1150,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1151,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1152,
                isPanelShow: true,
                missionBeginTime: 0
            },
            {
                panelId: 1153,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1154,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1155,
                isPanelShow: false,
                missionBeginTime: 0
            },
            {
                panelId: 1156,
                isPanelShow: true,
                missionBeginTime: 0
            }
        ]
    } as GetRecommendMissionPanelListRsp)
}