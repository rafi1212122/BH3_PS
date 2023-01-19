import net from "net"
import logger from "../../util/logger"
import { GetAuthkeyReq, GetAuthkeyRsp, GetAuthkeyRsp_CmdId, GetAuthkeyRsp_Retcode } from "../../BengHuai"
import { CmdId } from "../../util/CmdId"
import Packet from "../Packet"

export default (socket: net.Socket, packet: GetAuthkeyReq) => {
    Packet.getInstance().serializeAndSend(socket, GetAuthkeyRsp_CmdId.CMD_ID, {
        retcode: GetAuthkeyRsp_Retcode.SUCC,
        authkey: "iZHs+JkrT4sQUjp1MkQPWvrxzRRDdN+CJcQy1BEBIJz51765qPIjn6fqoHwoYIqLhh5Ff0sJ6ZhV16GGpAembwMD4SAIFmcgptAKIRIOGQiLdVvLOjo2Sba2p0SVMjkOtVOtzk2wSH/lxBuq4GZGbQYwiTVLq7C1REsXEiqLj7x9U1vMnKuC20ZTGO/KE6LfP/JW2fzqIhEbc3wDpbsNDBx/oPwkB2rQkIZKC8pb0c4pZsyBD3GIGehQ6bjZfHIJwCrtP7QJdl+TfCvzWOASSsUoLM77EiDZZxVQ9CkBMIRdlPkp0Y/wvfLlP0ZbUUXl3jPYLhKSErvaIp3KS48IxaRaj1MjaQfGt8+SSljVom1CgXa/IpDUo4ltBXHF1F/QQ2FX7uWGsUomhB6VxChJ6+Obk+QaY0ddjIE69LVkHUDI7chXSKQTDU+v7lQKchOmJcmgtqoec2jPhQDKT7tNrHKkRW/uw0EdJZZRWpDzqeiEKN+EbCh8mGyVes3vBMwyDTdhtOEMTGQT1U9x4/rny8qehBQCZBjXYdKgI4DEhtPHu6+yP4FDKPVJA1CvxvGAerlzCTfZ8B08en6uNp4hAaYbqDqIJFsy3HEHx9A9AuBU8jPC0+WGAYucV6cnjqQ6yLod+yNCTkKhGRDNMQjjB6uV6q2/W4AjvOrZ+NzHDbA=",
        authAppid: packet.authAppid,
        signType: packet.signType,
        authkeyVer: packet.authkeyVer
    } as GetAuthkeyRsp)
}