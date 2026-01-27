// const array = [1,7,5,12,-10,0,4,3,2]

// function insertionSort(arr){

//     for(let i = 1; i < arr.length;i++){

//         let curr = arr[i]
//         let prev = i - 1
         
//         while( curr < arr[prev] && prev >= 0 ){
//             arr[prev+1] = arr[prev]
//             prev--
//         }
//         arr[prev+1] = curr
        
//     }

//     return arr
// }

// let result = insertionSort(array) 
// console.log(result)



// Merge sort 


function mergeSort(arr){
    if(arr.length == 1) return arr
    let mid = arr.length / 2
    let leftSort = mergeSort(arr.slice(0, mid))
    let rightSort = mergeSort(arr.slice(mid))
    return merge(leftSort, rightSort)
}

function merge(la, ra){
    let tempArr = []
    let lp = 0
    let rp = 0
    
    while(lp < la.length && rp < ra.length){
        if(la[lp] < ra[rp]){
            tempArr.push(la[lp])
            lp++
        }else{
            tempArr.push(ra[rp])
            rp++
        }
    }
    return [...tempArr, ...la.slice(lp), ...ra.slice(rp) ]
}

console.log(mergeSort([2,5,4,9,1,6, 3]))

