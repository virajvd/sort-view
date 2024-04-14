const print = require('../printFunction')

function range_0_to_10(input){
    return input.every((elem)=>
        elem>=0 && elem<10
    )
}

module.exports.validate = function validate(input, view){
    let error = false
    if(view){
        if(input.length>10){
            print.printError(`Array length should be less than 10 for visualization, current length is ${input.length}`)
            error = true
        }
        if(!range_0_to_10(input)){
            print.printError("Visualization works best when numbers are in the range 0 to 9")
            error = true
        }
    }
    return error
}

