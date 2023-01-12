import net from "net"
import logger from "../../util/logger"
import { GetCustomHeadDataReq, GetCustomHeadDataRsp, GetCustomHeadDataRsp_CmdId, GetCustomHeadDataRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetCustomHeadDataReq, cmdId: number) => {
    Packet.getInstance().serializeAndSend(socket, GetCustomHeadDataRsp_CmdId.CMD_ID, {
        retcode: GetCustomHeadDataRsp_Retcode.SUCC,
        isAll: true,
        customHeadList: [
            {
                "id": 161067
            },
            {
                "id": 161068
            },
            {
                "id": 161069
            },
            {
                "id": 161001
            },
            {
                "id": 161002
            },
            {
                "id": 161004
            },
            {
                "id": 161006
            },
            {
                "id": 161008
            },
            {
                "id": 161009
            },
            {
                "id": 161010
            },
            {
                "id": 161011
            },
            {
                "id": 161012
            },
            {
                "id": 161013
            },
            {
                "id": 161014
            },
            {
                "id": 161015
            },
            {
                "id": 161016
            },
            {
                "id": 161017
            },
            {
                "id": 161018
            },
            {
                "id": 161020
            },
            {
                "id": 161021
            },
            {
                "id": 161022
            },
            {
                "id": 161023
            },
            {
                "id": 161024
            },
            {
                "id": 161025
            },
            {
                "id": 161027
            },
            {
                "id": 161028
            },
            {
                "id": 161029
            },
            {
                "id": 161030
            },
            {
                "id": 161031
            },
            {
                "id": 161032
            },
            {
                "id": 161033
            },
            {
                "id": 161035
            },
            {
                "id": 161036
            },
            {
                "id": 161037
            },
            {
                "id": 161038
            },
            {
                "id": 161040
            },
            {
                "id": 161041
            },
            {
                "id": 161042
            },
            {
                "id": 161043
            },
            {
                "id": 161044
            },
            {
                "id": 161046
            },
            {
                "id": 161050
            },
            {
                "id": 161052
            },
            {
                "id": 161054
            },
            {
                "id": 161055
            },
            {
                "id": 161056
            },
            {
                "id": 161058
            },
            {
                "id": 161059
            },
            {
                "id": 161060
            },
            {
                "id": 161061
            },
            {
                "id": 161062
            },
            {
                "id": 161063
            },
            {
                "id": 161064
            },
            {
                "id": 161065
            },
            {
                "id": 161066
            },
            {
                "id": 161071
            },
            {
                "id": 161072
            },
            {
                "id": 161073
            },
            {
                "id": 161075
            },
            {
                "id": 161076
            },
            {
                "id": 161078
            },
            {
                "id": 161079
            },
            {
                "id": 161080
            },
            {
                "id": 162021
            },
            {
                "id": 162027
            },
            {
                "id": 162049
            },
            {
                "id": 162123
            },
            {
                "id": 162140
            },
            {
                "id": 162148
            },
            {
                "id": 162153
            },
            {
                "id": 162154
            },
            {
                "id": 162156
            },
            {
                "id": 162158
            },
            {
                "id": 162164
            },
            {
                "id": 162166
            },
            {
                "id": 162168
            },
            {
                "id": 162171
            },
            {
                "id": 162174
            },
            {
                "id": 162176
            },
            {
                "id": 162177
            }
        ]
    } as GetCustomHeadDataRsp)
}