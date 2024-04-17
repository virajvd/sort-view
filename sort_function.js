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
            if(view && (j+1)<arr.length) print.internalPrint2(arr, `Checking if value at index ${j} is greater than value at index ${j+1}`)
            if(arr[j]>arr[j+1]) {
                if(view) {                    
                    print.swapPrint(j,(j+1), arr)
                }
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
            else if(view && (j+1)<arr.length){
                print.intermediatePrint("No swapping reuired")
                console.log()
            }
        }
        if (swapped===false && i!=arr.length-1) {
            if(view){
                print.intermediatePrint("Since no swapping was done all elements are already sorted")
            }
            break
        }
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
        print.swapInsertionPrint(i,j+1,key,arr)
    }
    if(view){
        print.finalPrint(arr, "Sorted array using Insertion Sort is: ")
    }
    return arr
}

module.exports.selectionsort = function selectionsort(arr, view = false){
    if(view) {
        print.explainPrint(exp?.sort_explaination?.selectionsort)
        print.internalPrint2(arr, "Initial Array")
        console.log('----------------------------------------')
    }
    for (let i = 0; i < arr.length-1; i++){         
        let k = i; 
        if(view) print.internalPrint2(arr, `Lets fix ${arr[i]} at index ${i} and find the smallest value in rest of the unsorted array`)
        for (j = i + 1; j < arr.length; j++) 
        if (arr[j] < arr[k]) 
            k = j; 
        
        if(view && i==k) {
            print.intermediatePrint(`No swapping is required as ${arr[i]} is already the smallest value in rest of the unsorted array`)
            console.log()
        }
        if(view && i!=k) print.swapPrint(i,k, arr);
        [arr[i], arr[k]] = [arr[k], arr[i]]
    }
    if(view){
        print.finalPrint(arr, "Sorted array using Selection Sort is: ")
    }
    return arr 
}
