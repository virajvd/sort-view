const print = require('../printFunction')

function allNumber(input=[]){
    return input.every((elem)=>
        typeof(elem) === 'number'
    )
}

module.exports.validate = function validate(input, view){
    let error = false
    if(!Array.isArray(input)) {
        let type = typeof(input)
        let errorStr = `Expected an array but got ${type}`
        print.printError(errorStr)
        error = true
        return error
    }
    if(!allNumber(input)){
        print.printError("All array elements should be of type Number")
        error = true
    }
    return error
}
