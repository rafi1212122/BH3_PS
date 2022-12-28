import net from "net"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"
import { Retcode } from "./GetPlayerTokenReq"

export default (socket: net.Socket, packet: GetAuthkeyReq) => {
    const reply = Packet.getInstance().serialize(CmdId['GetAuthkeyRsp'], {
        retcode: Retcode.SUCC,
        authkey: "iZHs+JkrT4sQUjp1MkQPWvrxzRRDdN+CJcQy1BEBIJz51765qPIjn6fqoHwoYIqLhh5Ff0sJ6ZhV16GGpAembwMD4SAIFmcgptAKIRIOGQiLdVvLOjo2Sba2p0SVMjkOtVOtzk2wSH/lxBuq4GZGbQYwiTVLq7C1REsXEiqLj7x9U1vMnKuC20ZTGO/KE6LfP/JW2fzqIhEbc3wDpbsNDBx/oPwkB2rQkIZKC8pb0c4pZsyBD3GIGehQ6bjZfHIJwCrtP7QJdl+TfCvzWOASSsUoLM77EiDZZxVQ9CkBMIRdlPkp0Y/wvfLlP0ZbUUXl3jPYLhKSErvaIp3KS48IxaRaj1MjaQfGt8+SSljVom1CgXa/IpDUo4ltBXHF1F/QQ2FX7uWGsUomhB6VxChJ6+Obk+QaY0ddjIE69LVkHUDI7chXSKQTDU+v7lQKchOmJcmgtqoec2jPhQDKT7tNrHKkRW/uw0EdJZZRWpDzqeiEKN+EbCh8mGyVes3vBMwyDTdhtOEMTGQT1U9x4/rny8qehBQCZBjXYdKgI4DEhtPHu6+yP4FDKPVJA1CvxvGAerlzCTfZ8B08en6uNp4hAaYbqDqIJFsy3HEHx9A9AuBU8jPC0+WGAYucV6cnjqQ6yLod+yNCTkKhGRDNMQjjB6uV6q2/W4AjvOrZ+NzHDbA=",
        auth_appid: packet.auth_appid,
        sign_type: packet.sign_type,
        authkey_ver: packet.sign_type
    } as GetAuthkeyRsp)
    socket.write(reply)
}

export interface GetAuthkeyReq {
    auth_appid?: string,
    sign_type?: number,
    authkey_ver?: number
}

export interface GetAuthkeyRsp {
    retcode: Retcode,
    authkey?: string,
    auth_appid?: string,
    sign_type?: number,
    authkey_ver?: number
}