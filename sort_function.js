let print = require('./printFunction')
let exp = require('./constant.json')

module.exports.bubblesort = function bubblesort(arr, view = false){
    if(view) {
        print.explainPrint(exp?.sort_explaination?.bubblesort)
        print.internalPrint2(arr, "Initial Array")
        console.log('----------------------------------------')
    }
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
        print.finalPrint(arr, "Sorted array using Bubble Sort is: ")
    }
    return arr
}

module.exports.insertionsort = function insertionsort(arr, view = false){
    if(view) {
        print.explainPrint(exp?.sort_explaination?.insertionsort)
        print.internalPrint2(arr, "Initial Array")
        console.log('----------------------------------------')
    }
    for(let i=1;i<arr.length;i++){
        let key = arr[i]  
        if(view) print.intermediatePrint(`${key} at index ${i} picked to find its correct position`)     
        let j = i-1        
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j = j-1            
        }
        arr[j+1] = key
        if(view && i==j+1){
            print.internalPrint2(arr, `${key} already at its correct position`)
        }
        else if (view && i!=j+1){
            print.internalPrint2(arr, `${key} at index ${i} moved to index ${(j+1)}`)
            let k=0            
            while(k<(j+1)){
                process.stdout.write('  ')
                k++
            }
            process.stdout.write(' ^')            
            while(k<i){
                if(k==i-1) process.stdout.write("=>")
                else process.stdout.write("==")
                k++
            }
            console.log()
            k=0
            while(k<(j+1)){
                process.stdout.write('  ')
                k++
            }
            process.stdout.write(' |\n')            
        }       
        if(view) console.log()
    }
    if(view){
        print.finalPrint(arr, "Sorted array using Insertion Sort is: ")
    }
    return arr
}
