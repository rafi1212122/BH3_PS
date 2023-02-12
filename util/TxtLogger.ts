import { createWriteStream } from "fs";

export default class TxtLogger {
    private static instance: TxtLogger
    private static c = new console.Console(createWriteStream('./log.txt'))

    public static getInstance(): TxtLogger {
        if(!TxtLogger.instance) TxtLogger.instance = new TxtLogger()
        return TxtLogger.instance
    }

    public log(...args: any[]) {
        console.log(...args);
    }
}