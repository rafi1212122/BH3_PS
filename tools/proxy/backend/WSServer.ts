import { Server, WebSocket } from 'ws'
import Config from '../../../utils/Config'
import Logger from '../../../utils/Logger'
import { IncomingMessage } from 'http'

const c = new Logger('WS', 'cyanBright')

export default class WSServer {
    private static instance: WSServer
    private readonly server = new Server({ port: Config.PROXY.WS_PORT })

    public constructor() {
        this.server.on('listening', () => {
            c.log(`WebSocket listening on ${Config.PROXY.WS_PORT}!`)
        })

        this.server.on('connection', (socket: WebSocket, req: IncomingMessage) => {
            c.log(`${req.socket.remoteAddress}:${req.socket.remotePort} connected!`)
        })
    }
    
    public static getInstance(): WSServer {
        return this.instance ??= new WSServer()
    }

    public broadcast(msg: string) {
        this.server.clients.forEach(socket => {
            socket.send(msg)
        })
    }
}