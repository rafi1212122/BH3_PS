import chalk from "chalk";

export default function log(msg: string, type?: string, title?: string) {
    switch(type){
        case"danger": 
            return console.log(`[${new Date().toLocaleTimeString()}] <${chalk.red(title?title:'ERROR')}> ${chalk.whiteBright(msg)}`)
        case"warn":
            return console.log(`[${new Date().toLocaleTimeString()}] <${chalk.yellow(title?title:'WARN')}> ${chalk.whiteBright(msg)}`)
        default: 
            return console.log(`[${new Date().toLocaleTimeString()}] <${chalk.whiteBright(title?title:'ANY')}> ${chalk.whiteBright(msg)}`)
    }
}