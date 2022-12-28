import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetAvatarTeamDataReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetAvatarTeamDataRsp'], {
        retcode: Retcode.SUCC,
        avatar_team_list: [
            {
                stage_type: 1,
                avatar_id_list: [ 101 ]
            }
        ],
        custom_avatar_team_list: []
    } as GetAvatarTeamDataRsp)
    socket.write(reply)
}

export interface GetAvatarTeamDataReq {}

export interface GetAvatarTeamDataRsp {
    retcode: Retcode
    avatar_team_list: AvatarTeam[]
    custom_avatar_team_list: CustomAvatarTeam[]
}

export interface AvatarTeam {
    stage_type: number
    avatar_id_list: number[]
}

export interface CustomAvatarTeam {
    team_id: number
    name: string
    avatar_id_list: number[]
    elf_id_list: number[]
}