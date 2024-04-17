let print = require('./printFunction')
let inputValidation = require('./validation/inputValidation')
let viewValidation = require('./validation/viewValidation')
let sort_function = require('./sort_function')


module.exports.bubblesort = function bubblesort(arr, view = false){
    try {
        let inputValidResponse = inputValidation.validate(arr, view)
        let viewValidResponse = viewValidation.validate(arr, view)
        if(inputValidResponse || viewValidResponse) return
        const size = arr.length
        if(size===0) {
            print.printError("Array is empty")
            return []
        }
        return sort_function.bubblesort(arr, view)
    } catch (error) {
        print.printError(error)
    }
}

module.exports.insertionsort = function insertionsort(arr, view = false){
    try {
        let inputValidResponse = inputValidation.validate(arr, view)
        let viewValidResponse = viewValidation.validate(arr, view)
        if(inputValidResponse || viewValidResponse) return
        const size = arr.length
        if(size===0) {
            print.printError("Array is empty")
            return []
        }
        return sort_function.insertionsort(arr, view)
    } catch (error) {
        print.printError(error)
    }  
}

module.exports.selectionsort = function selectionsort(arr, view = false){
    try {
        let inputValidResponse = inputValidation.validate(arr, view)
        let viewValidResponse = viewValidation.validate(arr, view)
        if(inputValidResponse || viewValidResponse) return
        const size = arr.length
        if(size===0) {
            print.printError("Array is empty")
            return []
        }
        return sort_function.selectionsort(arr, view)
    } catch (error) {
        print.printError(error)
    }  
}

