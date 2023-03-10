import net from "net"
import { GetStageDataReq, GetStageDataRsp, GetStageDataRsp_CmdId, GetStageDataRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetStageDataReq) => {
    Packet.getInstance().serializeAndSend(socket, GetStageDataRsp_CmdId.CMD_ID, {
        retcode: GetStageDataRsp_Retcode.SUCC,
        eventDataList: [
            {
                beginTime: 1673467200,
                endTime: 1673467200*2,
                chapterId: 34,
                unlockLevel: 30
            }
        ],
        finishedChapterList: [
            1
        ],
        stageList: [
            {
                id: 101601
            },
            {
                id: 101602
            },
            {
                id: 101603
            },
            {
                id: 101604
            },
            {
                id: 45455
            },
            {
                id: 45001
            },
            {
                id: 45013
            },
            {
                id: 45033
            },
            {
                id: 45444
            },
            {
                id: 45443
            },
            {
                id: 143124
            },
            {
                id: 143125
            },
            {
                id: 369011
            },
            {
                id: 369012
            },
            {
                id: 369013
            },
            {
                id: 369014
            },
            {
                id: 369015
            },
            {
                id: 369016
            },
            {
                id: 370021
            },
            {
                id: 370022
            },
            {
                id: 370023
            },
            {
                id: 370024
            },
            {
                id: 370025
            },
            {
                id: 370026
            },
            {
                id: 371441
            },
            {
                id: 371442
            },
            {
                id: 371443
            },
            {
                id: 371444
            },
            {
                id: 371445
            },
            {
                id: 371446
            },
            {
                id: 371447
            },
            {
                id: 371448
            },
            {
                id: 371449
            },
            {
                id: 371450
            },
            {
                id: 371451
            },
            {
                id: 371452
            },
            {
                id: 371453
            },
            {
                id: 371454
            },
            {
                id: 371455
            },
            {
                id: 371456
            },
            {
                id: 371457
            },
            {
                id: 371458
            },
            {
                id: 142079
            },
            {
                id: 143231
            },
            {
                id: 170000
            },
            {
                id: 170001
            },
            {
                id: 170002
            },
            {
                id: 170003
            },
            {
                id: 170004
            },
            {
                id: 170005
            },
            {
                id: 170006
            },
            {
                id: 170007
            },
            {
                id: 170008
            },
            {
                id: 170009
            },
            {
                id: 170010
            },
            {
                id: 170011
            },
            {
                id: 170012
            },
            {
                id: 170013
            },
            {
                id: 170014
            },
            {
                id: 170015
            },
            {
                id: 170016
            },
            {
                id: 170017
            },
            {
                id: 170018
            },
            {
                id: 170019
            },
            {
                id: 143358
            },
            {
                id: 143359
            },
            {
                id: 143360
            },
            {
                id: 143362
            },
            {
                id: 143363
            },
            {
                id: 144719
            },
            {
                id: 144720
            },
            {
                id: 145613
            },
            {
                id: 145626
            },
            {
                id: 145628
            },
            {
                id: 145630
            },
            {
                id: 10300100
            },
            {
                id: 10300101
            },
            {
                id: 10300102
            },
            {
                id: 10300103
            },
            {
                id: 10300104
            },
            {
                id: 10300105
            },
            {
                id: 10300106
            },
            {
                id: 10300107
            },
            {
                id: 10300108
            },
            {
                id: 145555
            },
            {
                id: 145629
            },
            {
                id: 145633
            },
            {
                id: 148080
            },
            {
                id: 148081
            },
            {
                id: 170199
            },
            {
                id: 145786
            },
            {
                id: 145787
            }
        ],
    } as GetStageDataRsp)
}
//08 bb ab 1d 10 ac ab 88 81 02 2a 02 08 00 08 00 12 1a 08 b6 97 06 10 01 28 00 28 01 28 02 48 2f 80 01 01 90 01 00 90 01 01 90 01 02 12 1a 08 b7 97 06 10 01 28 00 28 01 28 02 48 33 80 01 01 90 01 00 90 01 01 90 01 02 12 1a 08 b8 97 06 10 01 28 00 28 01 28 02 48 3a 80 01 01 90 01 00 90 01 01 90 01 02 12 1a 08 b9 97 06 10 01 28 00 28 01 28 02 48 2f 80 01 01 90 01 00 90 01 01 90 01 02 12 24 08 8f e3 02 10 01 18 03 28 00 28 01 28 02 48 0e 80 01 01 90 01 00 90 01 01 90 01 02 98 01 b6 fa 02 a0 01 05 12 04 08 f5 e1 02 12 22 08 81 e2 02 10 01 28 00 28 01 28 02 48 10 80 01 01 90 01 00 90 01 01 90 01 02 98 01 da a1 05 a0 01 04 12 04 08 95 e2 02 12 22 08 84 e3 02 10 01 28 00 28 01 28 02 48 06 80 01 01 90 01 00 90 01 01 90 01 02 98 01 9b 8f 02 a0 01 03 12 1d 08 83 e3 02 10 01 28 01 28 02 48 08 80 01 01 90 01 01 90 01 02 98 01 92 f7 03 a0 01 05 12 04 08 94 de 08 12 04 08 95 de 08 12 18 08 e5 ca 16 28 00 28 01 28 02 48 3a 80 01 01 90 01 00 90 01 01 90 01 02 12 18 08 e6 ca 16 28 00 28 01 28 02 48 29 80 01 01 90 01 00 90 01 01 90 01 02 12 18 08 e7 ca 16 28 00 28 01 28 02 48 10 80 01 01 90 01 00 90 01 01 90 01 02 12 18 08 e8 ca 16 28 00 28 01 28 02 48 1a 80 01 01 90 01 00 90 01 01 90 01 02 12 18 08 e9 ca 16 28 00 28 01 28 02 48 0f 80 01 01 90 01 00 90 01 01 90 01 02 12 13 08 ea ca 16 28 00 28 02 48 0e 80 01 01 90 01 00 90 01 02 12 09 08 83 d6 16 48 75 80 01 01 12 09 08 84 d6 16 48 68 80 01 01 12 09 08 85 d6 16 48 44 80 01 01 12 09 08 86 d6 16 48 79 80 01 01 12 09 08 87 d6 16 48 5f 80 01 01 12 09 08 88 d6 16 48 4d 80 01 01 12 11 08 89 d6 16 10 01 48 70 68 e3 04 70 a7 03 80 01 01 12 1a 08 8a d6 16 10 01 48 4f 68 b5 10 70 bf 02 78 b7 01 78 bc 01 78 fd 01 80 01 01 12 1b 08 8b d6 16 10 01 48 81 01 68 fd 11 70 b7 03 78 b4 01 78 f9 01 78 86 02 80 01 01 12 1b 08 8c d6 16 10 01 48 88 01 68 e1 12 70 bc 01 78 e9 01 78 eb 01 78 ee 01 80 01 01 12 19 08 8d d6 16 10 01 48 2e 68 69 70 c9 03 78 a7 02 78 b4 02 78 cd 02 80 01 01 12 1a 08 8e d6 16 10 01 48 5d 68 c9 05 70 ad 03 78 c7 01 78 f9 02 78 87 03 80 01 01 12 04 08 8f d6 16 12 04 08 90 d6 16 12 04 08 91 d6 16 12 04 08 92 d6 16 12 04 08 93 d6 16 12 04 08 94 d6 16 12 04 08 ff d5 08 12 04 08 ff de 08 12 04 08 90 b0 0a 12 04 08 91 b0 0a 12 04 08 92 b0 0a 12 04 08 93 b0 0a 12 04 08 94 b0 0a 12 04 08 95 b0 0a 12 04 08 96 b0 0a 12 04 08 97 b0 0a 12 04 08 98 b0 0a 12 04 08 99 b0 0a 12 04 08 9a b0 0a 12 04 08 9b b0 0a 12 04 08 9c b0 0a 12 04 08 9d b0 0a 12 04 08 9e b0 0a 12 04 08 9f b0 0a 12 04 08 a0 b0 0a 12 04 08 a1 b0 0a 12 04 08 a2 b0 0a 12 04 08 a3 b0 0a 12 04 08 fe df 08 12 04 08 ff df 08 12 04 08 80 e0 08 12 04 08 82 e0 08 12 04 08 83 e0 08 12 04 08 cf ea 08 12 04 08 d0 ea 08 12 04 08 cd f1 08 12 04 08 da f1 08 12 04 08 dc f1 08 12 04 08 de f1 08 12 05 08 c4 d5 f4 04 12 05 08 c5 d5 f4 04 12 05 08 c6 d5 f4 04 12 05 08 c7 d5 f4 04 12 05 08 c8 d5 f4 04 12 05 08 c9 d5 f4 04 12 05 08 ca d5 f4 04 12 05 08 cb d5 f4 04 12 05 08 cc d5 f4 04 12 04 08 93 f1 08 12 04 08 dd f1 08 12 04 08 e1 f1 08 12 04 08 f0 84 09 12 04 08 f1 84 09 12 04 08 d7 b1 0a 12 04 08 86 f2 08 12 09 08 99 b4 69 10 01 80 01 01 12 04 08 f8 f2 08 18 01 18 02 18 03 18 04 18 05 18 06 18 07 18 08 18 09 18 0a 18 0b 18 0c 18 0d 18 0e 18 0f 18 10 18 11 18 12 18 13 18 14 18 15 18 16 18 17 18 18 18 19 18 1a 18 1b 18 1c 18 1d 18 20 22 10 08 a0 b6 b1 9b 06 10 bf aa fc 9d 06 18 21 20 1e 89 ab cd ef