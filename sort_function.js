let print = require('./printFunction')
let exp = require('./constant.json')

module.exports.bubblesort = function bubblesort(arr, view = false){
    if(view) print.explainPrint(exp?.sort_explaination?.bubblesort)
    let swapped = false
    for(let i=0;i<arr.length;i++){
        swapped = false
        
        for(let j=0;j<arr.length-i;j++){
            
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