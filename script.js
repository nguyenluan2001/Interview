//Problem: Given an array, sort that array in ascending order

//Constraints:
    // + 0 <= nums.length <= 10^5

// Ex1: Input: [5, 1, 6, 2, 4]
//     Ouputput: [1, 2, 4, 5, 6]

// Ex2: Input: [5, 4, 3, 2, 1]
//      Output: [1, 2, 3, 4, 5]

// Ex3: Input: []
//      Output: []
// ================

// ============ Solution: Using heap sort ========================
const swap = (heap, child, parent) => {
    [heap[child], heap[parent]] = [heap[parent], heap[child]]
}
const peek  = (heap) => {
    const root = heap[0]
    swap(heap, 0, heap.length-1)
    heap.length=heap.length-1
    let currentIdx=0
    let left=2*currentIdx+1
    let right=2*currentIdx+2
    let minIdx = (heap[left] || Infinity)<=(heap[right]||Infinity)?left:right
    while(heap[currentIdx]>=heap[minIdx]){
        swap(heap, currentIdx, minIdx)
        currentIdx=minIdx
        left=2*currentIdx+1
        right=2*currentIdx+2
        minIdx = (heap[left] || Infinity)<=(heap[right]||Infinity)?left:right
    }
    return root
}
const heapify = (nums) => {
    let heap=[]
    for(let i=0;i<nums.length;i++){
        heap.push(nums[i])
        if(heap.length>1){
            let currIdx = i
            let parentIdx = Math.floor((currIdx-1)/2)
            while(heap[currIdx]<heap[parentIdx]){
                swap(heap, currIdx, parentIdx)
                currIdx=parentIdx
                parentIdx = Math.floor((currIdx-1)/2)
            }
        }
    }
    return heap
}
var heapSort = function(nums) {
    let heap = heapify(nums)
    let result = []
    while(heap.length!==0){
        const value = peek(heap, 'min')
        result.push(value)
    }
    return result
    
};
console.log(heapSort([5, 1, 6, 2, 4])) 
console.log(heapSort([5,4,3,2,1])) 
console.log(heapSort([])) 
