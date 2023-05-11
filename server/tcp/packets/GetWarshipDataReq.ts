import { GetWarshipDataRsp, GetWarshipDataRsp_CmdId, GetWarshipDataRsp_Retcode } from "../../../resources/proto/BengHuai";
import Packet from "../Packet";
import Session from "../Session";

export default async (session: Session, packet: Packet) => {
    const rsp = Packet.encode(GetWarshipDataRsp, {
        retcode: GetWarshipDataRsp_Retcode.SUCC,
        isAll: true,
        warshipList: [
            {
                warshipId: 0,
                componentList: [],
                bgmPlayMode: 0,
                isWeatherFixed: false,
                weatherIdx: 0
            },
            {
                warshipId: 400001,
                componentList: [
                    {
                        componentId: 101,
                        type: 1
                    },
                    {
                        componentId: 102,
                        type: 1
                    },
                    {
                        componentId: 401000,
                        type: 2
                    },
                ],
                bgmPlayMode: 0,
                isWeatherFixed: false,
                weatherIdx: 0
            },
            {
                warshipId: 400004,
                componentList: [],
                bgmPlayMode: 0,
                isWeatherFixed: false,
                weatherIdx: 0
            },
            {
                warshipId: 400006,
                componentList: [],
                bgmPlayMode: 0,
                isWeatherFixed: false,
                weatherIdx: 0
            }
        ]
    }, GetWarshipDataRsp_CmdId.CMD_ID)

    session.send(rsp)
}