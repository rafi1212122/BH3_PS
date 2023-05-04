import { Server, Socket, createServer } from "net";
import Config from "../../utils/Config";
import Logger from "../../utils/Logger";
import Session from "./Session";

const c = new Logger("TCP", 'blueBright')

export default class Gameserver {
    private static instance: Gameserver
    private readonly tcpServer: Server
    public readonly sessions: Map<string, Session> = new Map();

    public constructor() {
        this.tcpServer = createServer()
    }
    
    public static getInstance(): Gameserver {
        return this.instance ??= new Gameserver()
    }

    public start() {
        this.tcpServer.listen(Config.GAMESERVER.PORT, () => {
            c.log(`TCP server listening on port ${Config.GAMESERVER.PORT}`)
        })
        
        this.tcpServer.on('connection', this.onConnection.bind(this))
    }

    private onConnection(socket: Socket) {
        const client = `${socket.remoteAddress}:${socket.remotePort}`
        this.sessions.set(client, new Session(socket))
        c.log(`${client} connected!`)
    }
}