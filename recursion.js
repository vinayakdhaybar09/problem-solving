// summ of all numbers in array
const arr = [2,4,6,2,5,3]
const sum = (n) =>{
    console.log(n)
    if(n === 0 ) return arr[n]
    return arr[n] + sum(n - 1)
}

console.log(sum(arr.length - 1))