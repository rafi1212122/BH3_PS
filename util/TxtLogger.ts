import { createWriteStream } from "fs";

export default class TxtLogger {
    private static instance: TxtLogger
    private c = new console.Console(createWriteStream('./log.txt'))

    public static getInstance(): TxtLogger {
        if(!TxtLogger.instance) TxtLogger.instance = new TxtLogger()
        return TxtLogger.instance
    }

    public log(...args: any[]) {
        this.c.log(...args);
    }
}