import net from "net";
import { CmdId } from "../util/CmdId";
import Packet from "./Packet";
import logger from '../util/logger'

export default class Session {

    public constructor(id: string, socket: net.Socket) {
        socket.on('data', async (data: Buffer) => {
            const packet = Packet.getInstance().deserialize(data)
            if(packet.cmdId!==CmdId.KeepAliveNotify) console.log(CmdId[packet.cmdId], packet)
            if(!packet.body) return logger(`CmdId ${packet.cmdId} not registered!`, 'danger')
            await import(`./packetsHandler/${CmdId[packet.cmdId]}`).then(async r => {
                await r.default(socket, packet?.body);
            }).catch(err => {
                if (err.code === 'MODULE_NOT_FOUND') {
                   return logger(`CMD ${CmdId[packet.cmdId]} NOT FOUND!`, 'danger');
                }
                logger(err, 'danger');
            });
        })
    }
}