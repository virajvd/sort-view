let print = require('./printFunction')


module.exports.bubblesort = function bubblesort(arr, view = false){
    if(!Array.isArray(arr)) {
        let type = typeof(arr)
        let errorStr = `Expected an array but got ${type}`
        print.printError(errorStr)
        throw new Error(errorStr)
    }
    const size = arr.length
    if(size===0) {
        print.printError("Array is empty")
        return []
    }
    let swapped = false
    for(let i=0;i<size;i++){
        swapped = false
        
        for(let j=0;j<size-i;j++){
            
            if(arr[j]>arr[j+1]) {
                if(view) {
                    print.internalPrint2(arr)
                    print.swapPrint(j,(j+1), arr)
                }
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if (swapped===false) break
    }
    if(view){
        print.finalPrint(arr, "Sorted array is: ")
    }
    return arr
}

