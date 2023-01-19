import net from "net"
import { GeneralActivityGetScheduleReq, GeneralActivityGetScheduleRsp, GeneralActivityGetScheduleRsp_CmdId, GeneralActivityGetScheduleRsp_Retcode } from "../../BengHuai"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GeneralActivityGetScheduleReq) => {
    Packet.getInstance().serializeAndSend(socket, GeneralActivityGetScheduleRsp_CmdId.CMD_ID, {
        retcode: GeneralActivityGetScheduleRsp_Retcode.SUCC,
        scheduleList: [
            {
                activityId: 40000085,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 540
            },
            {
                activityId: 40000086,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 541
            },
            {
                activityId: 40000087,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 542
            },
            {
                activityId: 40000088,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 543
            },
            {
                activityId: 40000117,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 585
            },
            {
                activityId: 40000118,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 586
            },
            {
                activityId: 40000119,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 587
            },
            {
                activityId: 40000120,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 588
            },
            {
                activityId: 40000130,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 606
            },
            {
                activityId: 40000131,
                showTime: 1593223200,
                beginTime: 1593223200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 619
            },
            {
                activityId: 40000133,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 626
            },
            {
                activityId: 40000134,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 627
            },
            {
                activityId: 40000135,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 628
            },
            {
                activityId: 40000136,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 629
            },
            {
                activityId: 40000137,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 630
            },
            {
                activityId: 40000138,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 631
            },
            {
                activityId: 40000139,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 632
            },
            {
                activityId: 40000140,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 633
            },
            {
                activityId: 40000142,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 640
            },
            {
                activityId: 40000143,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 641
            },
            {
                activityId: 40000144,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 642
            },
            {
                activityId: 40000147,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 650
            },
            {
                activityId: 40000148,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 651
            },
            {
                activityId: 40000149,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 664
            },
            {
                activityId: 40000150,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 665
            },
            {
                activityId: 40000151,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 666
            },
            {
                activityId: 40000155,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 681
            },
            {
                activityId: 40000156,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 682
            },
            {
                activityId: 40000164,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 686
            },
            {
                activityId: 40000165,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 687
            },
            {
                activityId: 40000166,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 688
            },
            {
                activityId: 40000167,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 689
            },
            {
                activityId: 40000168,
                showTime: 1625450400,
                beginTime: 1625450400,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 691
            },
            {
                activityId: 40000169,
                showTime: 1625450400,
                beginTime: 1625450400,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 692
            },
            {
                activityId: 40000171,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 697
            },
            {
                activityId: 40000172,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 699
            },
            {
                activityId: 40000173,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 1913162400,
                endTime: 1913162400,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 700
            },
            {
                activityId: 40000174,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 2069611200,
                endTime: 2069611200,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 701
            },
            {
                activityId: 40000175,
                showTime: 1623031200,
                beginTime: 1623031200,
                settleTime: 2069611200,
                endTime: 2069611200,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 99,
                scheduleId: 702
            },
            {
                activityId: 40000221,
                showTime: 1648166400,
                beginTime: 1648166400,
                settleTime: 1682712000,
                endTime: 1682712000,
                beginDayTime: 14400,
                endDayTime: 100799,
                leftTimes: 100,
                scheduleId: 694
            }
        ]
    } as GeneralActivityGetScheduleRsp)
}