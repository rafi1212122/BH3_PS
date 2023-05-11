import { Server, Socket, createServer } from "net"
import Logger from "../../../utils/Logger"
import Config from "../../../utils/Config"
import Client from "./Client"

const c = new Logger("TCP", 'blueBright')

export default class Proxy {
    private readonly tcpServer: Server
    public readonly clients: Map<string, Client> = new Map();
    private static instance: Proxy
    
    public static getInstance(): Proxy {
        return this.instance ??= new Proxy()
    }
    
    public constructor() {
        this.tcpServer = createServer()
    }

    public start() {
        this.tcpServer.listen(Config.PROXY.LOCAL_PORT, () => {
            c.log(`TCP server listening on port ${Config.PROXY.LOCAL_PORT}`)
        })
        
        this.tcpServer.on('connection', this.onConnection.bind(this))
    }

    private onConnection(socket: Socket) {
        const client = `${socket.remoteAddress}:${socket.remotePort}`
        this.clients.set(client, new Client(socket))
        c.log(`${client} connected!`)
    }
}