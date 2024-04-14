const helper = require('./helperFunction')

const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m"
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};

module.exports.printError = function printError(error){
    console.log(colours.bg.red, error, colours.reset)
}

module.exports.finalPrint = function finalPrint(msg, sentence=undefined){
    if(sentence) process.stdout.write(sentence)
    console.log(colours.bg.blue, msg, colours.reset)
}

module.exports.internalPrint1 = function internalPrint1(arr, sentence=undefined){
    process.stdout.write(helper.arrToString(arr)+ "\t")
    if(sentence) process.stdout.write(sentence)
    process.stdout.write("\n")
}

module.exports.internalPrint2 = function internalPrint2(arr, sentence=undefined){
    let strConstruct = helper.arrToString(arr)+ "\t"
    if(sentence) strConstruct+=sentence
    console.log(colours.fg.red, strConstruct, colours.reset)
}

module.exports.explainPrint = function explainPrint(msg){
    console.log(colours.fg.green, msg, colours.reset)
}

module.exports.swapPrint = function swapPrint(ind1, ind2, arr){
    process.stdout.write(' ')
    for(let index = 0; index<=Math.max(ind1,ind2);index++){
        if(index==ind1 || index==ind2){
            process.stdout.write('^ ')
        }
        else{
            process.stdout.write('  ')
        }
    }
    process.stdout.write("\n")
    process.stdout.write(' ')
    for(let index = 0; index<=Math.max(ind1,ind2);index++){
        if(index==ind1 || index==ind2){
            process.stdout.write('| ')
        }
        else{
            process.stdout.write('  ')
        }
    }
    process.stdout.write("\n")
    console.log(colours.fg.yellow, `Swapping ${arr[ind1]} and ${arr[ind2]} at index ${ind1} and ${ind2}\n`, colours.reset)
}

