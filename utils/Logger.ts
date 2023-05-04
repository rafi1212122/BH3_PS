import chalk from "chalk";
import { Color } from "chalk";
import Config from "./Config";
import { VerboseLevel } from "./Config";

export default class Logger{
    private readonly name: string

    public constructor(name: string, private readonly labelColor?: typeof Color, private readonly color: typeof Color = 'whiteBright'){
        this.name = name
    }

    public log(...args: any[]) {
        console.log(`[${chalk.whiteBright(new Date().toLocaleTimeString())}] <${this.labelColor?chalk[this.labelColor](this.name):chalk.cyanBright(this.name)}>`, chalk[this.color](...args));
    }

    public warn(...args: any[]) {
        console.log(`[${chalk.whiteBright(new Date().toLocaleTimeString())}] <${chalk.yellowBright(this.name)}>`, chalk[this.color](...args));
    }
    
    public err(...args: any[]) {
        console.log(`[${chalk.whiteBright(new Date().toLocaleTimeString())}] <${chalk.redBright(this.name)}>`, chalk[this.color](...args));
    }

    public debug(...args: any[]) {
        if(Config.LOG_LEVEL < VerboseLevel.DEBUG) return
        console.log(`[${chalk.whiteBright(new Date().toLocaleTimeString())}] <${chalk.yellowBright(this.name)}>`, chalk.bgWhiteBright.black(...args));
    }
}