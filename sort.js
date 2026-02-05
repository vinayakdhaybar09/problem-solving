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



// Merge sort ---------------------------------------------------------


// function mergeSort(arr){
//     if(arr.length == 1) return arr
//     let mid = arr.length / 2
//     let leftSort = mergeSort(arr.slice(0, mid))
//     let rightSort = mergeSort(arr.slice(mid))
//     return merge(leftSort, rightSort)
// }

// function merge(la, ra){
//     let tempArr = []
//     let lp = 0
//     let rp = 0
    
//     while(lp < la.length && rp < ra.length){
//         if(la[lp] < ra[rp]){
//             tempArr.push(la[lp])
//             lp++
//         }else{
//             tempArr.push(ra[rp])
//             rp++
//         }
//     }
//     return [...tempArr, ...la.slice(lp), ...ra.slice(rp) ]
// }

// console.log(mergeSort([2,5,4,9,1,6, 3]))


//------Lettcode 88 -----------------------------------------------------


// function mergeArr(nums1, m, nums2, n){
    
//     let p1 = m-1
//     let p2 = n-1
//     let k = nums1.length - 1
    
//     while (p2 >= 0){
//         if(nums1[p1] > nums2[p2]){
//             nums1[k] = nums1[p1]
//             p1--
//         }else{
//             nums1[k] = nums2[p2]
//             p2--
//         }
//         k--
//     }
    
//     return nums1
    
// }


// console.log(mergeArr([2,5,7,0,0,0], 3, [1, 3, 5], 3))



// --------------35 — Search Insert Position (Where would this value go?)--------------

// function searchInsert(nums, target) {
//     let low = 0
//     let high = nums.length - 1

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)

//         if (nums[mid] === target) return mid

//         if (target > nums[mid]) {
//             low = mid + 1
//         } else {
//             high = mid - 1
//         }
//     }
//     return low
// }




//-------------------------278. First Bad Version----------------------------



// /**
//  * Definition for isBadVersion()
//  * 
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) { // [1, 2]

        let low = 1;
        let high = n;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (isBadVersion(mid)) {
                high = mid;        // first bad is here or left
            } else {
                low = mid + 1;     // first bad is right
            }
        }

        return low; // or high (both same)
    };
};


