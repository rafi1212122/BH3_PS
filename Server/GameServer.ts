import net from 'net'
import config from '../config';
import logger from '../util/logger'
import Session from './Session';

export default class GameServer{
    private static instance: GameServer
    public readonly gameServer: net.Server
    public readonly sessions: Map<string, Session> = new Map()

    private constructor() {
        this.gameServer = net.createServer()
    }

    public static getInstance(): GameServer {
        if(!GameServer.instance) GameServer.instance = new GameServer()
        return GameServer.instance
    }

    public start() {
        this.gameServer.listen(config.gameServerPort, () => {
            logger(`TCP server listening on port ${config.gameServerPort}`, '', 'TCP')
        })
        
        this.gameServer.on('connection', this.onConnection.bind(this));
    }

    private onConnection(sock: net.Socket) {
        logger(`${sock.remoteAddress}:${sock.remotePort} Connected`, 'warn', 'TCP');
        this.sessions.set(`${sock.remoteAddress}:${sock.remotePort}`, new Session(`${sock.remoteAddress}:${sock.remotePort}`, sock))
    }
}